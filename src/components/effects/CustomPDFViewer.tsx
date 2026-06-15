"use client";

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker to use local or unpkg worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface CustomPDFViewerProps {
  url: string;
}

export default function CustomPDFViewer({ url }: CustomPDFViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);
  const [containerNode, setContainerNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setNumPages(undefined); // Reset pages when URL changes
  }, [url]);

  useEffect(() => {
    if (!containerNode) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(containerNode);

    // Initial check in case ResizeObserver delays
    if (containerNode.clientWidth > 0) {
      setContainerWidth(containerNode.clientWidth);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerNode, url]);

  if (!isClient) return null;

  return (
    <div 
      ref={setContainerNode} 
      id="pdf-render-container" 
      style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', background: '#f1f5f9' }}
    >
      {containerWidth > 0 ? (
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              Loading PDF...
            </div>
          }
          error={
            <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>
              Failed to load PDF.
            </div>
          }
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} style={{ marginBottom: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <Page
                pageNumber={index + 1}
                width={containerWidth - 32} // 16px padding on each side
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<div style={{ height: 800, background: 'white' }} />}
              />
            </div>
          ))}
        </Document>
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Preparing viewer...
        </div>
      )}
    </div>
  );
}
