import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import https from "https";
import { IncomingMessage } from "http";
import { personalInfo, summary, experience, techStack } from "../src/content/resume";

const OUTPUT_DIR = path.join(__dirname, "../public/resumes");
const FONTS_DIR = path.join(__dirname, "fonts");

const fontRegularPath = path.join(FONTS_DIR, "Inter-Regular.ttf");
const fontBoldPath = path.join(FONTS_DIR, "Inter-Bold.ttf");
const fontMediumPath = path.join(FONTS_DIR, "Inter-Medium.ttf");

// Ensure directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

// File downloader helper with redirect support
function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      return resolve();
    }

    const request = (currentUrl: string) => {
      https.get(currentUrl, (response: IncomingMessage) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            request(redirectUrl);
            return;
          }
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download file: Status ${response.statusCode}`));
          return;
        }

        const fileStream = fs.createWriteStream(dest);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          resolve();
        });

        fileStream.on("error", (err) => {
          fs.unlink(dest, () => {});
          reject(err);
        });
      }).on("error", reject);
    };

    request(url);
  });
}

function generatePDF(lang: "en" | "fr", type: "general" | "executive" | "technical", filename: string) {
  // Spacious standard margins (30pt top/bottom, 40pt left/right) for premium multi-page design
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 30, bottom: 30, left: 40, right: 40 },
  });

  const stream = fs.createWriteStream(path.join(OUTPUT_DIR, filename));
  doc.pipe(stream);

  let pageCount = 1;
  doc.on("pageAdded", () => {
    pageCount++;
    console.log(`[PAGE_ADDED] ${filename}: page ${pageCount} added. doc.y = ${doc.y}`);
  });

  // Modern corporate color palette (Indigo / Slate)
  const primaryColor = "#4f46e5";   // Modern Blue Accent
  const secondaryColor = "#09090b"; // Zinc-950
  const textColor = "#27272a";      // Zinc-800
  const mutedColor = "#52525b";     // Zinc-600
  const lineColor = "#e2e8f0";      // Slate-200

  const useInter = fs.existsSync(fontRegularPath) && fs.existsSync(fontBoldPath);

  if (useInter) {
    doc.registerFont("Inter", fontRegularPath);
    doc.registerFont("Inter-Bold", fontBoldPath);
    if (fs.existsSync(fontMediumPath)) {
      doc.registerFont("Inter-Medium", fontMediumPath);
    } else {
      doc.registerFont("Inter-Medium", fontRegularPath);
    }
  }

  const getFont = (variant: "regular" | "bold" | "medium") => {
    if (!useInter) {
      if (variant === "bold") return "Helvetica-Bold";
      return "Helvetica";
    }
    if (variant === "bold") return "Inter-Bold";
    if (variant === "medium") return "Inter-Medium";
    return "Inter";
  };

  // --- HEADER SECTION ---
  // Left Name & Title
  doc
    .font(getFont("bold"))
    .fontSize(23)
    .fillColor(secondaryColor)
    .text(personalInfo.name, 40, 30);

  const titleText = lang === "fr" ? personalInfo.title.fr : personalInfo.title.en;
  doc
    .font(getFont("medium"))
    .fontSize(12.5)
    .fillColor(primaryColor)
    .text(titleText, 40, 58);

  // Contact details row
  const contactText = `${personalInfo.email}   \u2022   ${personalInfo.location}   \u2022   github.com/${personalInfo.githubUsername}   \u2022   linkedin.com/in/mohamed-marwen-maalawi`;
  
  doc
    .font(getFont("regular"))
    .fontSize(9)
    .fillColor(mutedColor)
    .text(contactText, 40, 76);

  // Header Divider
  doc.y = 92;
  doc
    .strokeColor(lineColor)
    .lineWidth(0.5)
    .moveTo(40, doc.y)
    .lineTo(555, doc.y)
    .stroke();

  doc.y = 100;

  // Custom Section Header with left-accent bar
  let isFirstSection = true;
  function drawSectionHeader(title: string) {
    if (!isFirstSection) {
      doc.y += 18; // generous spacing between sections
    } else {
      isFirstSection = false;
      doc.y += 2;
    }
    const startY = doc.y;

    // Left accent bar
    doc.save();
    doc.roundedRect(40, startY, 2, 12, 1)
      .fillColor(primaryColor)
      .fill();
    doc.restore();

    // Section Title
    doc
      .font(getFont("bold"))
      .fontSize(10)
      .fillColor(secondaryColor)
      .text(title.toUpperCase(), 48, startY - 1);

    // Separator line
    doc.y = startY + 15;
    doc
      .strokeColor(lineColor)
      .lineWidth(0.5)
      .moveTo(40, doc.y)
      .lineTo(555, doc.y)
      .stroke();

    doc.y = startY + 22; // set cursor below line
  }

  // 1. Professional Summary (Spacious left border)
  const summaryTitle = lang === "fr" ? "Profil Professionnel" : "Professional Summary";
  const summaryContent = lang === "fr" ? summary.fr : summary.en;
  drawSectionHeader(summaryTitle);

  const summaryY = doc.y;
  const summaryWidth = 507; // 555 - 48

  doc.font(getFont("regular")).fontSize(10.5).lineGap(2.5);
  const summaryHeight = doc.heightOfString(summaryContent, {
    width: summaryWidth,
    align: "justify"
  });

  // Draw left border accent line
  doc.save();
  doc.strokeColor(primaryColor)
    .lineWidth(1.5)
    .moveTo(40, summaryY + 2)
    .lineTo(40, summaryY + summaryHeight - 2)
    .stroke();
  doc.restore();

  // Print text
  doc
    .fillColor(textColor)
    .text(summaryContent, 48, summaryY, {
      width: summaryWidth,
      align: "justify",
      lineGap: 2.5
    });

  doc.y = summaryY + summaryHeight + 12;

  // 2. Experience Section
  const expTitle = lang === "fr" ? "Expérience Professionnelle" : "Professional Experience";
  drawSectionHeader(expTitle);

  experience.forEach((job, idx) => {
    // Executive CV filters out Freelance
    if (type === "executive" && job.id === "freelance") {
      return;
    }

    const jobStartY = doc.y;

    const companyName = typeof job.company === "string" ? job.company : (lang === "fr" ? job.company.fr : job.company.en);
    const roleText = lang === "fr" ? job.role.fr : job.role.en;
    const periodText = lang === "fr" ? job.period.fr : job.period.en;

    // Company Name (size 12 bold)
    doc
      .font(getFont("bold"))
      .fontSize(12)
      .fillColor(secondaryColor)
      .text(companyName, 40, jobStartY);

    // Date range aligned right
    doc
      .font(getFont("regular"))
      .fontSize(9.5)
      .fillColor(mutedColor)
      .text(periodText, 40, jobStartY + 1.5, { align: "right", width: 515 });

    // Job Title underneath (size 10.5 medium, Indigo accent)
    doc
      .font(getFont("medium"))
      .fontSize(10.5)
      .fillColor(primaryColor)
      .text(roleText, 40, jobStartY + 15);

    doc.y = jobStartY + 31;

    // Bullet points (10.5pt, spacious lineGap)
    const points = lang === "fr" ? job.responsibilities.fr : job.responsibilities.en;
    const displayPoints = type !== "general" ? points.slice(0, 4) : points;

    displayPoints.forEach((point) => {
      doc
        .font(getFont("regular"))
        .fontSize(10.5)
        .fillColor(textColor)
        .text("•  ", 45, doc.y, { continued: true })
        .text(point, 52, doc.y, { lineGap: 1.5, width: 503 });
    });

    // Inline technologies list
    doc.y += 5;
    const techListText = job.technologies.join("  \u2022  ");
    doc
      .font(getFont("bold"))
      .fontSize(8.75)
      .fillColor(primaryColor)
      .text("Technologies: ", 52, doc.y, { continued: true })
      .font(getFont("regular"))
      .fillColor(mutedColor)
      .text(techListText);

    doc.y += 18; // generous spacing between jobs
    doc.x = 40;
  });

  // 3. Technical Skills Section (2-Column Grid Layout)
  if (doc.y > 670) {
    doc.addPage();
  }

  const skillsTitle = lang === "fr" ? "Expertise Technique" : "Technical Skills";
  drawSectionHeader(skillsTitle);

  const leftColX = 40;
  const rightColX = 295;
  const leftColWidth = 230;
  const rightColWidth = 260;

  function renderSkillCategory(x: number, width: number, label: string, skills: readonly string[]) {
    doc.x = x;
    doc
      .font(getFont("bold"))
      .fontSize(9.5)
      .fillColor(secondaryColor)
      .text(label.toUpperCase(), x, doc.y);
    
    doc.y += 3;
    
    doc
      .font(getFont("regular"))
      .fontSize(9.5)
      .fillColor(textColor)
      .text(skills.join("  \u2022  "), x, doc.y, {
        width: width,
        lineGap: 1.6
      });
  }

  // Row 1
  const row1StartY = doc.y;
  
  // Left: Backend
  doc.y = row1StartY;
  renderSkillCategory(leftColX, leftColWidth, lang === "fr" ? "Backend & Architecture" : "Backend & Architecture", techStack.backend);
  const leftY1 = doc.y;
  
  // Right: Frontend
  doc.y = row1StartY;
  renderSkillCategory(rightColX, rightColWidth, lang === "fr" ? "Frontend & Mobile" : "Frontend & Mobile", [...techStack.frontend, ...techStack.mobile]);
  const rightY1 = doc.y;

  // Row 2
  const row2StartY = Math.max(leftY1, rightY1) + 14;
  
  // Left: Databases
  doc.y = row2StartY;
  renderSkillCategory(leftColX, leftColWidth, lang === "fr" ? "Bases de données" : "Databases", techStack.databases);
  const leftY2 = doc.y;
  
  // Right: Cloud & DevOps
  doc.y = row2StartY;
  renderSkillCategory(rightColX, rightColWidth, lang === "fr" ? "Cloud & DevOps" : "Cloud & DevOps", techStack.infrastructure);
  const rightY2 = doc.y;

  // Row 3
  const row3StartY = Math.max(leftY2, rightY2) + 14;
  
  // Left: Tools & Methodologies
  doc.y = row3StartY;
  renderSkillCategory(leftColX, leftColWidth, lang === "fr" ? "Outils & Méthodologies" : "Tools & Methodologies", techStack.integrations);


  doc.end();
}

// Download fonts and execute generation
async function main() {
  console.log("Checking and downloading Inter fonts...");
  try {
    await downloadFile("https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf", fontRegularPath);
    await downloadFile("https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf", fontBoldPath);
    await downloadFile("https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf", fontMediumPath);
    console.log("Inter fonts loaded successfully.");
  } catch (error) {
    console.error("Failed to download Inter fonts, falling back to system fonts (Helvetica):", error);
  }

  console.log("Generating ATS-friendly premium resumes...");
  generatePDF("en", "general", "resume-en.pdf");
  generatePDF("fr", "general", "resume-fr.pdf");
  generatePDF("en", "executive", "resume-executive.pdf");
  generatePDF("en", "technical", "resume-technical.pdf");
  console.log("ATS Premium PDF generation complete!");
}

main().catch(console.error);
