#!/usr/bin/env python3
"""Generate Advanced Search Techniques PowerPoint presentation."""

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN
from pptx.util import Inches, Pt

# Brand palette — deep teal + terracotta accent
NAVY = RGBColor(0x0B, 0x2E, 0x33)
TEAL = RGBColor(0x1A, 0x6B, 0x6B)
ACCENT = RGBColor(0xE8, 0x7A, 0x3D)
LIGHT = RGBColor(0xF5, 0xF7, 0xF6)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
SOFT = RGBColor(0xD6, 0xE4, 0xE1)
MUTED = RGBColor(0x4A, 0x5C, 0x5E)
DARK_TEXT = RGBColor(0x1A, 0x2A, 0x2C)

SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)


def set_run_font(run, size=18, bold=False, color=DARK_TEXT, name="Calibri"):
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.color.rgb = color
    run.font.name = name


def add_rect(slide, left, top, width, height, fill):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill
    shape.line.fill.background()
    return shape


def add_textbox(slide, left, top, width, height, text, size=18, bold=False,
                color=DARK_TEXT, align=PP_ALIGN.LEFT, name="Calibri"):
    box = slide.shapes.add_textbox(left, top, width, height)
    tf = box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    set_run_font(run, size=size, bold=bold, color=color, name=name)
    return box


def add_bullets(slide, left, top, width, height, items, size=16, color=DARK_TEXT,
                spacing=10):
    box = slide.shapes.add_textbox(left, top, width, height)
    tf = box.text_frame
    tf.word_wrap = True
    for i, item in enumerate(items):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = PP_ALIGN.LEFT
        p.space_after = Pt(spacing)
        p.level = 0
        run = p.add_run()
        run.text = "•  " + item
        set_run_font(run, size=size, color=color)
    return box


def section_chrome(slide, title, subtitle=None):
    """Left accent bar + header for content slides."""
    add_rect(slide, 0, 0, SLIDE_W, SLIDE_H, LIGHT)
    add_rect(slide, 0, 0, Inches(0.18), SLIDE_H, TEAL)
    add_rect(slide, 0, 0, SLIDE_W, Inches(1.15), NAVY)
    add_textbox(slide, Inches(0.55), Inches(0.32), Inches(12), Inches(0.55),
                title, size=28, bold=True, color=WHITE, name="Calibri")
    if subtitle:
        add_textbox(slide, Inches(0.55), Inches(1.35), Inches(12), Inches(0.4),
                    subtitle, size=15, color=MUTED)


def footer(slide, page, total=12):
    add_textbox(slide, Inches(0.55), Inches(7.05), Inches(8), Inches(0.3),
                "Advanced Search Techniques", size=11, color=MUTED)
    add_textbox(slide, Inches(11.2), Inches(7.05), Inches(1.5), Inches(0.3),
                f"{page}  /  {total}", size=11, color=MUTED, align=PP_ALIGN.RIGHT)


def make_presentation():
    prs = Presentation()
    prs.slide_width = SLIDE_W
    prs.slide_height = SLIDE_H
    blank = prs.slide_layouts[6]
    total = 12

    # —— 1. Title ——
    s = prs.slides.add_slide(blank)
    add_rect(s, 0, 0, SLIDE_W, SLIDE_H, NAVY)
    add_rect(s, 0, Inches(5.6), SLIDE_W, Inches(1.9), TEAL)
    add_rect(s, Inches(0.55), Inches(2.0), Inches(1.2), Inches(0.08), ACCENT)
    add_textbox(s, Inches(0.55), Inches(2.3), Inches(12), Inches(0.9),
                "Advanced Search Techniques", size=40, bold=True, color=WHITE)
    add_textbox(s, Inches(0.55), Inches(3.3), Inches(11), Inches(0.7),
                "Find better sources, faster — Boolean logic, operators,\n"
                "databases, citation tracking, and evaluation skills.",
                size=18, color=SOFT)
    add_textbox(s, Inches(0.55), Inches(6.1), Inches(12), Inches(0.4),
                "Research • Information Literacy • Digital Skills",
                size=14, color=WHITE)

    # —— 2. Agenda ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "What We Will Cover", "A practical roadmap for searching like a researcher")
    agenda = [
        ("01", "Why advanced search matters"),
        ("02", "Boolean operators (AND, OR, NOT)"),
        ("03", "Phrase, truncation & wildcards"),
        ("04", "Field & Google/web operators"),
        ("05", "Choosing the right database"),
        ("06", "Citation chaining & snowballing"),
        ("07", "Evaluating results critically"),
        ("08", "A repeatable search workflow"),
    ]
    for i, (num, label) in enumerate(agenda):
        col = i % 2
        row = i // 2
        x = Inches(0.55 + col * 6.3)
        y = Inches(1.9 + row * 1.15)
        add_rect(s, x, y, Inches(5.9), Inches(0.95), WHITE)
        add_rect(s, x, y, Inches(0.12), Inches(0.95), ACCENT if i % 2 == 0 else TEAL)
        add_textbox(s, x + Inches(0.35), y + Inches(0.22), Inches(1), Inches(0.5),
                    num, size=22, bold=True, color=TEAL)
        add_textbox(s, x + Inches(1.3), y + Inches(0.28), Inches(4.3), Inches(0.45),
                    label, size=16, color=DARK_TEXT)
    footer(s, 2, total)

    # —— 3. Why it matters ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Why Advanced Search Matters",
                   "Good questions die when search skills are weak")
    points = [
        "Basic keyword searches bury relevant results under noise and ads.",
        "Researchers lose hours clicking irrelevant pages and paywalled dead-ends.",
        "Advanced techniques surface peer-reviewed, primary, and hard-to-find sources.",
        "Precision operators cut results from millions to a manageable, high-quality set.",
        "These skills transfer across Google, Google Scholar, library databases, and AI tools.",
    ]
    add_bullets(s, Inches(0.55), Inches(1.9), Inches(7.2), Inches(4.5), points, size=17, spacing=14)

    # Right callout
    add_rect(s, Inches(8.3), Inches(1.9), Inches(4.4), Inches(4.4), NAVY)
    add_textbox(s, Inches(8.55), Inches(2.3), Inches(3.9), Inches(0.5),
                "The goal", size=14, bold=True, color=ACCENT)
    add_textbox(s, Inches(8.55), Inches(2.9), Inches(3.9), Inches(2.8),
                "Move from browsing hope\nto intentional retrieval:\n\nRight tool → Right query →\nRight sources → Judged carefully.",
                size=16, color=WHITE)
    footer(s, 3, total)

    # —— 4. Boolean ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Boolean Operators",
                   "The foundation of almost every advanced search engine")
    cards = [
        ("AND", "Narrows results",
         'climate AND agriculture\n\nOnly pages that include\nboth concepts.', TEAL),
        ("OR", "Broadens results",
         'teenager OR adolescent\n\nUseful for synonyms\nand alternate spellings.', NAVY),
        ("NOT / −", "Excludes terms",
         'jaguar NOT car\n\nRemoves unwanted\nmeanings of a word.', ACCENT),
    ]
    for i, (op, role, body, color) in enumerate(cards):
        x = Inches(0.55 + i * 4.2)
        add_rect(s, x, Inches(1.85), Inches(3.9), Inches(4.5), WHITE)
        add_rect(s, x, Inches(1.85), Inches(3.9), Inches(0.9), color)
        add_textbox(s, x + Inches(0.25), Inches(2.05), Inches(3.4), Inches(0.5),
                    op, size=24, bold=True, color=WHITE)
        add_textbox(s, x + Inches(0.25), Inches(2.95), Inches(3.4), Inches(0.4),
                    role, size=14, bold=True, color=color)
        add_textbox(s, x + Inches(0.25), Inches(3.45), Inches(3.4), Inches(2.5),
                    body, size=15, color=DARK_TEXT)
    footer(s, 4, total)

    # —— 5. Phrase / truncation ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Phrases, Truncation & Wildcards",
                   "Control word order and catch word variants")
    rows = [
        ('"exact phrase"', 'Quotes lock word order',
         '"renewable energy policy"'),
        ("truncation *", "Stem + any ending", "educat* → educate, education, educator"),
        ("wildcard ?", "Single-character swap", "organi?ation → organization / organisation"),
        ("parentheses ( )", "Group logic cleanly",
         '(teen OR adolescent) AND anxiety'),
        ("near / proximity", "Words close together", "climate NEAR/5 justice  (database-specific)"),
    ]
    for i, (tech, meaning, example) in enumerate(rows):
        y = Inches(1.75 + i * 0.9)
        add_rect(s, Inches(0.55), y, Inches(12.2), Inches(0.8), WHITE)
        add_textbox(s, Inches(0.75), y + Inches(0.2), Inches(2.8), Inches(0.4),
                    tech, size=16, bold=True, color=TEAL)
        add_textbox(s, Inches(3.7), y + Inches(0.2), Inches(3.5), Inches(0.4),
                    meaning, size=15, color=MUTED)
        add_textbox(s, Inches(7.4), y + Inches(0.2), Inches(5.1), Inches(0.4),
                    example, size=14, color=DARK_TEXT)
    footer(s, 5, total)

    # —— 6. Field & Google operators ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Field & Web Search Operators",
                   "Target titles, sites, file types, and date ranges")
    ops = [
        ("site:", "Limit to a domain", "site:edu  climate justice"),
        ("filetype:", "Find PDFs, docs, etc.", "filetype:pdf  open access syllabus"),
        ("intitle:", "Require word in title", 'intitle:"systematic review"'),
        ("inurl:", "Word appears in URL", "inurl:report  water scarcity"),
        ("before: / after:", "Date filters", "misinformation after:2023-01-01"),
        ("related:", "Similar sites", "related:who.int"),
        ("cache:", "Cached page snapshot", "cache:example.org/page"),
        ("-term", "Exclude a term", "apple -fruit -pie"),
    ]
    for i, (op, meaning, example) in enumerate(ops):
        col = i % 2
        row = i // 2
        x = Inches(0.55 + col * 6.35)
        y = Inches(1.7 + row * 1.15)
        add_rect(s, x, y, Inches(6.1), Inches(1.0), WHITE)
        add_textbox(s, x + Inches(0.2), y + Inches(0.15), Inches(1.8), Inches(0.35),
                    op, size=16, bold=True, color=ACCENT)
        add_textbox(s, x + Inches(2.1), y + Inches(0.15), Inches(3.7), Inches(0.35),
                    meaning, size=14, color=MUTED)
        add_textbox(s, x + Inches(0.2), y + Inches(0.52), Inches(5.6), Inches(0.35),
                    example, size=13, color=DARK_TEXT)
    footer(s, 6, total)

    # —— 7. Databases ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Choose the Right Search Space",
                   "Match the tool to the type of evidence you need")
    tools = [
        ("Google / Bing", "Broad discovery, news, grey literature, how-to pages"),
        ("Google Scholar", "Academic articles, citations, versions, related works"),
        ("Library databases", "PubMed, JSTOR, Scopus, Web of Science, IEEE, ERIC"),
        ("Government / NGO", "Official data, policy PDFs, census, WHO, UN, national portals"),
        ("Specialist engines", "Patents, legal (e.g. case law), datasets, code repos"),
        ("Library discovery", "Your campus catalog + linked full-text access"),
    ]
    for i, (name, desc) in enumerate(tools):
        y = Inches(1.7 + i * 0.75)
        add_rect(s, Inches(0.55), y, Inches(0.15), Inches(0.6), TEAL if i % 2 == 0 else ACCENT)
        add_textbox(s, Inches(0.95), y + Inches(0.08), Inches(3.2), Inches(0.45),
                    name, size=16, bold=True, color=NAVY)
        add_textbox(s, Inches(4.3), y + Inches(0.08), Inches(8.3), Inches(0.45),
                    desc, size=15, color=DARK_TEXT)
    footer(s, 7, total)

    # —— 8. Citation chaining ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Citation Chaining & Snowballing",
                   "Let excellent papers lead you to more excellent papers")
    # Two columns
    add_rect(s, Inches(0.55), Inches(1.85), Inches(5.9), Inches(4.4), WHITE)
    add_rect(s, Inches(0.55), Inches(1.85), Inches(5.9), Inches(0.7), TEAL)
    add_textbox(s, Inches(0.8), Inches(2.0), Inches(5.4), Inches(0.45),
                "Backward chaining", size=18, bold=True, color=WHITE)
    add_bullets(s, Inches(0.8), Inches(2.8), Inches(5.4), Inches(3.2), [
        "Start with a strong seed article.",
        "Mine its reference list for classics and foundations.",
        "Look for reviews & meta-analyses first.",
        "Note recurring author names and journals.",
    ], size=15, spacing=12)

    add_rect(s, Inches(6.85), Inches(1.85), Inches(5.9), Inches(4.4), WHITE)
    add_rect(s, Inches(6.85), Inches(1.85), Inches(5.9), Inches(0.7), ACCENT)
    add_textbox(s, Inches(7.1), Inches(2.0), Inches(5.4), Inches(0.45),
                "Forward chaining", size=18, bold=True, color=WHITE)
    add_bullets(s, Inches(7.1), Inches(2.8), Inches(5.4), Inches(3.2), [
        'Use “Cited by” in Google Scholar / Scopus.',
        "Find newer work that builds on your seed paper.",
        "Track debates, replications, and updates.",
        "Set alerts for new citations over time.",
    ], size=15, spacing=12)
    footer(s, 8, total)

    # —— 9. Evaluation ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Evaluate What You Find",
                   "Retrieval without judgment is just noise collection")
    criteria = [
        ("Authority", "Who wrote it? Credentials, affiliation, funding?"),
        ("Accuracy", "Cited sources? Methods clear? Peer-reviewed?"),
        ("Currency", "Is the date appropriate for your question?"),
        ("Purpose", "Inform, persuade, sell, or entertain?"),
        ("Coverage", "Sample size, scope, and what is excluded?"),
        ("Bias check", "Agenda, framing, missing counter-evidence?"),
    ]
    for i, (title, body) in enumerate(criteria):
        col = i % 3
        row = i // 3
        x = Inches(0.55 + col * 4.2)
        y = Inches(1.85 + row * 2.35)
        add_rect(s, x, y, Inches(3.95), Inches(2.1), WHITE)
        add_rect(s, x, y, Inches(3.95), Inches(0.12), TEAL if row == 0 else ACCENT)
        add_textbox(s, x + Inches(0.25), y + Inches(0.4), Inches(3.45), Inches(0.4),
                    title, size=18, bold=True, color=NAVY)
        add_textbox(s, x + Inches(0.25), y + Inches(0.95), Inches(3.45), Inches(0.9),
                    body, size=14, color=DARK_TEXT)
    footer(s, 9, total)

    # —— 10. Workflow ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "A Repeatable Search Workflow",
                   "Treat searching as a cycle, not a single query")
    steps = [
        ("1", "Define", "Write a clear research question and list key concepts."),
        ("2", "Map terms", "Synonyms, jargon, acronyms, related phrases."),
        ("3", "Build query", "Boolean + phrases + field limits."),
        ("4", "Pick tools", "Scholar / databases / web / gov as needed."),
        ("5", "Iterate", "Tighten or broaden; check first 2–3 pages carefully."),
        ("6", "Document", "Save queries, DOIs, and why each source matters."),
    ]
    for i, (num, title, body) in enumerate(steps):
        col = i % 3
        row = i // 3
        x = Inches(0.55 + col * 4.2)
        y = Inches(1.85 + row * 2.35)
        add_rect(s, x, y, Inches(3.95), Inches(2.1), WHITE)
        add_textbox(s, x + Inches(0.25), y + Inches(0.3), Inches(0.7), Inches(0.5),
                    num, size=28, bold=True, color=ACCENT)
        add_textbox(s, x + Inches(1.0), y + Inches(0.4), Inches(2.7), Inches(0.4),
                    title, size=18, bold=True, color=NAVY)
        add_textbox(s, x + Inches(0.25), y + Inches(1.05), Inches(3.45), Inches(0.85),
                    body, size=14, color=DARK_TEXT)
    footer(s, 10, total)

    # —— 11. Cheat sheet ——
    s = prs.slides.add_slide(blank)
    section_chrome(s, "Quick Cheat Sheet",
                   "Copy-ready patterns you can reuse today")
    examples = [
        ('"machine learning" AND (education OR classroom) site:.edu filetype:pdf',
         "Academic PDFs on ML in education"),
        ("(anxiety OR depression) AND adolescent* NOT bipolar",
         "Narrow clinical topic; exclude a related condition"),
        ('intitle:"systematic review" climate migration after:2020',
         "Recent reviews with the phrase in the title"),
        ("author:\"last name\"  + key topic  (in Scholar)",
         "Work by a known expert on your theme"),
        ("Cited by → review newest high-citation papers",
         "Forward chain from a foundational study"),
    ]
    for i, (query, note) in enumerate(examples):
        y = Inches(1.7 + i * 0.9)
        add_rect(s, Inches(0.55), y, Inches(12.2), Inches(0.8), WHITE)
        add_textbox(s, Inches(0.75), y + Inches(0.12), Inches(8.5), Inches(0.3),
                    query, size=13, bold=True, color=TEAL)
        add_textbox(s, Inches(0.75), y + Inches(0.42), Inches(11.5), Inches(0.3),
                    note, size=13, color=MUTED)
    footer(s, 11, total)

    # —— 12. Close ——
    s = prs.slides.add_slide(blank)
    add_rect(s, 0, 0, SLIDE_W, SLIDE_H, NAVY)
    add_rect(s, 0, Inches(5.8), SLIDE_W, Inches(1.7), TEAL)
    add_rect(s, Inches(0.55), Inches(1.8), Inches(1.2), Inches(0.08), ACCENT)
    add_textbox(s, Inches(0.55), Inches(2.1), Inches(12), Inches(0.7),
                "Search with intention.", size=36, bold=True, color=WHITE)
    add_textbox(s, Inches(0.55), Inches(3.0), Inches(11.5), Inches(1.8),
                "Combine Boolean logic, operators, the right databases,\n"
                "citation chaining, and critical evaluation.\n\n"
                "Better queries → better evidence → stronger work.",
                size=18, color=SOFT)
    add_textbox(s, Inches(0.55), Inches(6.25), Inches(12), Inches(0.4),
                "Thank you  ·  Practice on your next research question today",
                size=15, color=WHITE)

    out = "/workspace/presentations/Advanced_Search_Techniques.pptx"
    prs.save(out)
    return out


if __name__ == "__main__":
    path = make_presentation()
    print(f"Saved: {path}")
