from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUTPUT = "output/pdf/Paulo_Fernando_CV_Frontend.pdf"
INK = colors.HexColor("#182338")
MUTED = colors.HexColor("#556378")
ACCENT = colors.HexColor("#176BA0")

styles = {
    "name": ParagraphStyle(
        "name", fontName="Helvetica-Bold", fontSize=21, leading=25,
        textColor=INK, spaceAfter=3,
    ),
    "role": ParagraphStyle(
        "role", fontName="Helvetica-Bold", fontSize=11.2, leading=14,
        textColor=ACCENT, spaceAfter=8,
    ),
    "contact": ParagraphStyle(
        "contact", fontName="Helvetica", fontSize=9.1, leading=13,
        textColor=MUTED, spaceAfter=5,
    ),
    "heading": ParagraphStyle(
        "heading", fontName="Helvetica-Bold", fontSize=10.4, leading=13,
        textColor=ACCENT, spaceBefore=16, spaceAfter=6,
    ),
    "body": ParagraphStyle(
        "body", fontName="Helvetica", fontSize=9.45, leading=13.6,
        textColor=INK, spaceAfter=6, alignment=TA_LEFT,
    ),
    "item": ParagraphStyle(
        "item", fontName="Helvetica", fontSize=9.3, leading=13.2,
        textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=4,
    ),
    "job": ParagraphStyle(
        "job", fontName="Helvetica-Bold", fontSize=9.6, leading=13,
        textColor=INK, spaceBefore=5, spaceAfter=3,
    ),
    "meta": ParagraphStyle(
        "meta", fontName="Helvetica", fontSize=8.8, leading=12,
        textColor=MUTED, spaceAfter=3,
    ),
}

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    rightMargin=19 * mm,
    leftMargin=19 * mm,
    topMargin=17 * mm,
    bottomMargin=16 * mm,
    title="Paulo Fernando - Currículo Frontend",
    author="Paulo Fernando Chaves da Silva",
)

story = []


def para(text, style="body"):
    story.append(Paragraph(text, styles[style]))


def section(title):
    para(title.upper(), "heading")
    story.append(HRFlowable(width="100%", thickness=0.45, color=colors.HexColor("#CDD7E2"), spaceAfter=5))


def bullet(text):
    para("•  " + text, "item")


para("Paulo Fernando Chaves da Silva", "name")
para("Desenvolvedor Frontend  |  Professor de Inglês", "role")
para("São Paulo, SP  ·  (11) 98167-2145  ·  paulofernando78@gmail.com", "contact")
para('<link href="https://github.com/paulofernando78/dbec" color="#176BA0">github.com/paulofernando78/dbec</link>', "contact")

section("Perfil profissional")
para(
    "Professor de inglês e criador do Daily Basis English Course, em transição para "
    "desenvolvimento de software. Desenvolvo interfaces web com HTML, CSS, JavaScript e React, "
    "com foco em responsividade, componentes reutilizáveis e experiência de aprendizagem. "
    "Tenho conhecimentos iniciais de backend e consigo construir APIs simples. Busco uma "
    "oportunidade em frontend para combinar desenvolvimento, comunicação e experiência em educação."
)

section("Competências técnicas")
bullet("<b>Frontend:</b> HTML, CSS, JavaScript, React, interfaces responsivas e componentes reutilizáveis.")
bullet("<b>Ferramentas do projeto:</b> TypeScript, React Router, Vite, Tailwind CSS e Git.")
bullet("<b>Backend:</b> criação de APIs simples; conhecimentos em desenvolvimento.")

section("Projeto de desenvolvimento")
para("Daily Basis English Course (DBEC)  |  Aplicação web educacional", "job")
bullet("Desenvolvimento de uma plataforma de ensino de inglês com páginas de níveis, unidades e aulas.")
bullet("Implementação de exercícios interativos, navegação e acompanhamento de progresso salvo no navegador.")
bullet("Construção de componentes reutilizáveis e layouts responsivos com React, TypeScript e Tailwind CSS.")

section("Experiência profissional")
para("Daily Basis English Course  |  Professor de Inglês e criador do curso", "job")
para("Jan 2008 - presente", "meta")
bullet("Planejamento e condução de aulas de inglês para alunos e profissionais de diferentes perfis.")
bullet("Criação de materiais didáticos e adaptação do conteúdo a objetivos individuais; aulas presenciais e online.")

para("Experiências anteriores em ensino de inglês", "job")
para("House Teacher; Osborn English School; AIMHIGH Idiomas; Manhattan Village  |  2002 - 2008", "meta")
bullet("Aulas para adolescentes, adultos e profissionais em escolas, empresas e domicílios.")

section("Formação complementar")
bullet("Teacher Training Course (TTC) - ACBEU, Salvador, 2017.")
bullet("Cursos de inglês - Intrax English Institute, San Diego (2000); UEC, Salvador (1996-1998 e 1998).")

doc.build(story)
