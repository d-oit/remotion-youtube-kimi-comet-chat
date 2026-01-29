# PPTX File Format Reference

## Overview

PPTX files are ZIP archives containing XML documents that define the presentation structure.

## Archive Structure

```
presentation.pptx/
├── [Content_Types].xml      # Defines content types in the package
├── _rels/                   # Relationships files
│   ├── .rels
│   └── presentation.xml.rels
├── ppt/
│   ├── slides/
│   │   ├── slide1.xml
│   │   ├── slide2.xml
│   │   └── ...
│   ├── slides.xml           # Slide ordering
│   ├── presentation.xml     # Presentation properties
│   ├── theme/
│   │   └── theme1.xml
│   ├── media/               # Embedded media files
│   │   ├── image1.png
│   │   └── image2.jpg
│   ├── notesSlides/
│   │   └── notesSlide1.xml
│   └── drawings/            # DrawingML shapes
└── docProps/
    ├── core.xml             # Metadata (author, dates)
    └── app.xml              # Application properties
```

## Key XML Files

### presentation.xml
- Slide master definitions
- Presentation properties
- View settings

### slide[n].xml
- Slide layout
- Shape definitions
- Text content
- DrawingML elements

## Shape Types (MSO_SHAPE)

| Value | Name | Description |
|-------|------|-------------|
| 1 | RECTANGLE | Rectangle |
| 2 | ROUNDED_RECTANGLE | Rounded rectangle |
| 3 | ELLIPSE | Ellipse |
| 13 | PICTURE | Picture/image |
| 21 | TEXT_BOX | Text box |
| 24 | CALLOUT_1 | Callout with accent |
| 75 | UP_ARROW | Arrow shape |

## Placeholder Types

| Type ID | Name | Description |
|---------|------|-------------|
| 0 | TITLE | Slide title |
| 1 | BODY | Body content |
| 2 | CENTER_TITLE | Center title |
| 4 | NOTES | Speaker notes |

## Using python-pptx

```python
from pptx import Presentation

prs = Presentation('presentation.pptx')

# Get slide by index
slide = prs.slides[0]

# Get title
title = slide.shapes.title.text if slide.shapes.title else ""

# Iterate all shapes
for shape in slide.shapes:
    if shape.has_text_frame:
        for para in shape.text_frame.paragraphs:
            print(para.text)
```

## Common Patterns

Extract bullet points:
```python
for shape in slide.shapes:
    if shape.has_text_frame:
        for para in shape.text_frame.paragraphs:
            if para.level > 0:
                print(f"Bullet: {para.text}")
```

Extract images:
```python
for shape in slide.shapes:
    if shape.shape_type == 13:  # PICTURE
        print(f"Image: {shape.name}")
        image = shape.image
        print(f"Format: {image.format}")
```

Extract speaker notes:
```python
if slide.has_notes_slide:
    notes = slide.notes_slide.notes_text_frame.text
    print(f"Notes: {notes}")
```
