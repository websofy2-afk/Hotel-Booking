function extractFirstEditorParagraph(html: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const paragraphs = Array.from(doc.querySelectorAll("p"));
    for (const p of paragraphs) {
        const text = p.textContent?.replace(/\s+/g, " ").trim();
        if (text) return text;
    }
    return "";
}

export function extractExcerpt(html: string, limit = 200): string {
    const text = extractFirstEditorParagraph(html);
    
    return text.length > limit
        ? text.slice(0, limit)
        : text;
}