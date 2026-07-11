from fpdf import FPDF
from fpdf.enums import XPos, YPos

OUT = r"c:\xampp-original\htdocs\manjula-mam-corrected-25-06-2026\events-and-programs\GCC-2027.pdf"
W = 180

sections = [
    ("8th International Conference of the Global Cancer Consortium", "title"),
    ("GCC-SSCHRC International Oncology Conference", "subtitle"),
    ("Dates: 29 and 30 January 2027", "body"),
    ("Venue: Sri Shankara Cancer Hospital and Research Centre, Bengaluru, Karnataka, India", "body"),
    ("Jointly organized by Sri Shankara Cancer Hospital and Research Centre and GCC South Asia Chapter", "body"),
    ("Theme: Molecular Approaches to Clinical Oncology", "heading"),
    ("Multidisciplinary Approaches, Innovative Science and Technologies", "body"),
    ("Email: GCC2027@sschrc.org", "body"),
    ("About the Conference", "heading"),
    (
        "We welcome experts in oncology, clinicians and molecular scientists to share knowledge, "
        "network with the global cancer community, and contribute to cancer control, translational "
        "research, and advanced treatment planning. The conference offers oral and poster presentation "
        "opportunities for clinicians, scientists, and students.",
        "body",
    ),
    ("Focus Areas", "heading"),
    (
        "Malignancies related to breast, ovary, pancreas, colon, urinary bladder, and lung. "
        "Participants include doctors, scientists, postgraduate and PhD scholars, nationally and globally, "
        "in person and virtually.",
        "body",
    ),
    ("Registration - Early Bird (until 31 October 2026)", "heading"),
    ("Consultant/Faculty Delegates: INR 5000 / USD 60", "body"),
    ("Postgraduate Students: INR 5000 / USD 60", "body"),
    ("Registration - Revised Fee (until 31 December 2026)", "heading"),
    ("Consultant/Faculty Delegates: INR 6000 / USD 70", "body"),
    ("Postgraduate Students: INR 6000 / USD 70", "body"),
    ("Annual GCC members: 20% discount | Life GCC members: No delegate fee", "body"),
    ("Conference Objectives", "heading"),
    ("- Advance knowledge through collaboration between clinicians and molecular scientists", "body"),
    ("- Provide learning opportunities for postgraduate students and PhD scholars", "body"),
    ("- Promote global research collaboration in cancer care", "body"),
    ("- Encourage exchange between clinicians, scientists, technologists, and faculty", "body"),
    ("Organising Committee Chairperson: Dr BS Srinath, Managing Trustee, Sri Shankara Cancer Foundation", "body"),
    ("Organising Secretary: Dr S Pruthvish, Dean-Medical Sciences, SSCHRC", "body"),
]

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

for text, kind in sections:
    if kind == "title":
        pdf.set_font("Helvetica", "B", 15)
        pdf.multi_cell(W, 8, text)
        pdf.ln(2)
    elif kind == "subtitle":
        pdf.set_font("Helvetica", "B", 12)
        pdf.multi_cell(W, 7, text)
        pdf.ln(2)
    elif kind == "heading":
        pdf.ln(2)
        pdf.set_font("Helvetica", "B", 11)
        pdf.multi_cell(W, 7, text)
    else:
        pdf.set_font("Helvetica", "", 10)
        pdf.multi_cell(W, 6, text)

pdf.output(OUT)
print(f"Wrote {OUT}")
