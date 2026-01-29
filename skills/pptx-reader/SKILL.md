---
name: pptx-reader
description: Extract text, images, and structure from PowerPoint (.pptx) files. Use when working with presentations to: (1) Extract all slide content including titles, body text, and bullet points, (2) Analyze presentation structure and slide count, (3) Extract embedded images and media, (4) Parse speaker notes and comments, (5) Convert PPTX to structured data for video/storyboard projects.
---

# PPTX Reader Skill

Extract structured data from PowerPoint presentations for use in videos, documentation, or analysis.

## Quick Start

Run the extraction script to get JSON output:

```bash
python skills/pptx-reader/scripts/extract_pptx.py <path-to-pptx-file> [--output <output.json>]
```

## Output Structure

The extraction returns a JSON object with:

```json
{
  "metadata": {
    "title": "Presentation title",
    "author": "Author name",
    "slides_count": 6,
    "created": "2026-01-28",
    "modified": "2026-01-28"
  },
  "slides": [
    {
      "slide_number": 1,
      "title": "Slide title",
      "layout": "title",
      "content": [
        {"type": "paragraph", "text": "Body text here", "style": "normal"}
      ],
      "notes": "Speaker notes if present"
    }
  ],
  "images": [
    {"path": "media/image1.png", "slide": 1, "description": "Company logo"}
  ]
}
```

## Slide Content Types

Each slide's `content` array contains objects with `type` field:

| type | Description |
|------|-------------|
| `title` | Main slide title |
| `subtitle` | Subtitle or tagline |
| `paragraph` | Regular text body |
| `bullet` | Bullet point item |
| `numbered` | Numbered list item |
| `image` | Embedded image reference |
| `table` | Table data |
| `shape` | Shape/graphic element |

## Video Storyboard Workflow

When using PPTX to plan video content:

1. **Extract all slides** to understand narrative flow
2. **Map slides to video segments** using `slide_number` and `title`
3. **Extract key phrases** from `content[].text` for titles/overlays
4. **Identify segment transitions** where `layout` changes
5. **Extract images** for use in video backgrounds

## Common Use Cases

### YouTube Video Planning
```bash
python extract_pptx.py presentation.pptx --output storyboard.json
# Use storyboard.json to create video composition structure
```

### Content Analysis
Extract all text to understand presentation themes and key messages.

### Documentation
Convert presentations to Markdown or other formats for technical docs.

## Supported Formats

- `.pptx` (PowerPoint 2007+ XML format)
- Embedded images: PNG, JPEG, GIF, BMP
- SmartArt and shapes (basic extraction)
