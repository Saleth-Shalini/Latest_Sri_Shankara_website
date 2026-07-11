# Sri Shankara Cancer Hospital — Broken Links Audit Checklist

Use this file to verify each broken link and record the **correct target URL/path**.

**How to use**
- [ ] = not yet verified
- [x] = verified / approved
- Fill in **Your correct link** when the suggested fix is wrong or you want a different destination
- Paths are relative to site root unless noted (e.g. `../` = from a subfolder page)

**Site root example:** `Doctors/cancer-specialists.html` → `https://yoursite.org/Doctors/cancer-specialists.html`

---

## Legend

| Column | Meaning |
|--------|---------|
| **Broken link** | What is in the code today |
| **Found on** | File(s) or section where it appears |
| **Suggested fix** | Best match based on files in this project |
| **Your correct link** | *You fill this in* |
| **Verified** | Mark `[x]` when done |

---

## 1. Site-wide — Footer (`footer-home.js` + `footer.js`)

Applies to **every page** that loads the footer.

| Verified | Broken link | Found on | Suggested fix | Your correct link |
|----------|-------------|----------|---------------|-------------------|
| [ ] | `Doctors/Cancer-Specialists.html` | `footer-home.js`, `footer.js` (+ subpages use `../Doctors/Cancer-Specialists.html`) | `Doctors/cancer-specialists.html` | |
| [ ] | `Cancer-We-Treat/cancerpedia_index.html` | `footer-home.js`, `footer.js` | `Cancer-We-Treat/cancerpedia-index.html` | |
| [ ] | `Diagnosis-&-Screening/Cancer-Screening-Packages.html` | `footer-home.js`, `footer.js` | `Diagnosis-&-Screening/cancer-screening-packages.html` | |
| [ ] | `patient-services/Second-Opinion.html` | `footer-home.js`, `footer.js` | `patient-services/second-opinion.html` | |
| [ ] | `patient-services/Insurance-Billing.html` | `footer-home.js`, `footer.js` | `patient-services/insurance-and-billing.html` | |
| [ ] | `patient-services/International-Patients.html` | `footer-home.js`, `footer.js` | `patient-services/international-patients.html` | |
| [ ] | `../headerbutton/SSCHRC%20Website%20Privacy%20Policy.pdf` | `footer-home.js`, `footer.js` | **PDF missing in repo** — add file or new URL | |- headerbutton\SSCHRC-Website-Privacy-Policy.pdf
| [ ] | `../headerbutton/Mobile_Application—Privacy_Policy.pdf` | `footer-home.js`, `footer.js` | **PDF missing in repo** — add file or new URL | |- headerbutton\Mobile-Application-Privacy-Policy.pdf

---

## 2. Site-wide — Header (`header-home.js` — homepage only)

| Verified | Broken link | Menu label | Suggested fix | Your correct link |
|----------|-------------|------------|---------------|-------------------|
| [ ] | `Departments/Pain-Palliative-Care_Department.html` | Pain & Palliative Care | `Departments/pain-and-palliative-care.html` | |

---

## 3. Site-wide — Header (`header.js` — all subpages)

### 3a. Department menu

| Verified | Broken link | Menu label | Suggested fix | Your correct link |
|----------|-------------|------------|---------------|-------------------|
| [ ] | `../Departments/Paediatric_Oncology_BMT_Centre.html` | Paediatric Oncology & BMT | `../Departments/paediatric-oncology-bmt.html` | |
| [ ] | `../Departments/Community_Oncology_Department.html` | Preventive Oncology | `../Departments/preventive-oncology.html` | |

### 3b. Cancer Care mega-menu (wrong folder `cancer-we-treat/` → should be `Cancer-We-Treat/`)

| Verified | Broken link | Menu label | Suggested fix | Your correct link |
|----------|-------------|------------|---------------|-------------------|
| [ ] | `../cancer-we-treat/All-Types-Cancer.html` | Cancer-We-Treat (main) | `../Cancer-We-Treat/cancerpedia-index.html` | |
| [ ] | `../cancer-we-treat/Breast-Cancer.html` | Breast Cancer | `../Cancer-We-Treat/Breast-Cancer.html` | |
| [ ] | `../cancer-we-treat/Cervical-Cancer.html` | Cervical Cancer | `../Cancer-We-Treat/Cervical-Cancer.html` | |
| [ ] | `../cancer-we-treat/Ovarian-Cancer.html` | Ovarian Cancer | `../Cancer-We-Treat/Ovarian-Cancer.html` | |
| [ ] | `../cancer-we-treat/Prostate-Cancer.html` | Prostate Cancer | `../Cancer-We-Treat/Prostate-Cancer.html` | |
| [ ] | `../cancer-we-treat/Testicular-Cancer.html` | Testicular Cancer | `../Cancer-We-Treat/Testicular-Cancer.html` | |
| [ ] | `../cancer-we-treat/Paediatric-Cancer.html` | Paediatric Cancer | `../Cancer-We-Treat/Childhood-Acute-Lymphocytic-Leukemia.html` | |
| [ ] | `../cancer-we-treat/Blood-Cancer.html` | Blood Cancer | `../Cancer-We-Treat/Leukaemia.html` | |
| [ ] | `../cancer-we-treat/Rare-Cancers.html` | Rare Cancers | `../Cancer-We-Treat/Cancer-of-Unknown-Primary-CUP.html` | |
| [ ] | `../cancer-we-treat/Head-Neck-Cancer.html` | Head & Neck Cancer | `../Cancer-We-Treat/Head-and-Neck-Cancer.html` | |
| [ ] | `../cancer-we-treat/Thyroid-Cancer.html` | Thyroid Cancer | `../Cancer-We-Treat/Thyroid-Cancer.html` | |
| [ ] | `../cancer-we-treat/Lung-Cancer.html` | Lung Cancer | `../Cancer-We-Treat/Lung-Cancer.html` | |
| [ ] | `../cancer-we-treat/Gastrointestinal-Cancer.html` | Gastrointestinal Cancer | `../Cancer-We-Treat/gastrointestinal-cancer.html` | |
| [ ] | `../cancer-we-treat/Liver-Tumours.html` | Liver Tumours | `../Cancer-We-Treat/Liver-Cancer.html` | |
| [ ] | `../cancer-we-treat/Colorectal-Cancer.html` | Colorectal Cancer | `../Cancer-We-Treat/Colorectal-Cancer.html` | |
| [ ] | `../cancer-we-treat/Pancreatic-Cancer.html` | Pancreatic Cancer | `../Cancer-We-Treat/Pancreatic-Cancer.html` | |
| [ ] | `../cancer-we-treat/Brain-Tumours.html` | Brain Tumours | `../Cancer-We-Treat/brain-tumours.html` | |
| [ ] | `../cancer-we-treat/Skin-Cancer.html` | Skin Cancer | `../Cancer-We-Treat/Skin-Cancer.html` | |
| [ ] | `../cancer-we-treat/Urological-Cancers.html` | Kidney Cancers | `../Cancer-We-Treat/Kidney-Cancer.html` | |
| [ ] | `../Cancer-We-Treat/cancerpedia_index.html` | View all cancers (`.js` file) | `../Cancer-We-Treat/cancerpedia-index.html` | |

---

## 4. Site-wide — Chatbox (`chatbox.js`)

| Verified | Broken link | Chat label | Suggested fix | Your correct link |
|----------|-------------|------------|---------------|-------------------|
| [ ] | `Doctors/Cancer-Specialists.html` | Find a Doctor / Browse Doctors | `Doctors/cancer-specialists.html` | |
| [ ] | `patient-services/Second-Opinion.html` | Request Second Opinion | `patient-services/second-opinion.html` | |
| [ ] | `Diagnosis-&-Screening/Cancer-Screening-Packages.html` | Screening Packages | `Diagnosis-&-Screening/cancer-screening-packages.html` | |
| [ ] | `patient-services/Insurance-Billing.html` | Full Insurance List | `patient-services/insurance-and-billing.html` | |

---

## 5. Homepage (`index.html`)

### 5a. Hero quick-action buttons

| Verified | Broken link | Button text | Suggested fix | Your correct link |
|----------|-------------|-------------|---------------|-------------------|
| [ ] | `Doctors/Cancer-Specialists.html` | Our Doctors | `Doctors/cancer-specialists.html` | |
| [ ] | `patient-services/Second-Opinion.html` | Second Opinion | `patient-services/second-opinion.html` | |
| [ ] | `Diagnosis-&-Screening/Cancer-Screening-Packages.html` | Cancer Screening | `Diagnosis-&-Screening/cancer-screening-packages.html` | |

### 5b. Centres of Excellence cards

| Verified | Broken link | Card title | Suggested fix | Your correct link |
|----------|-------------|------------|---------------|-------------------|
| [ ] | `Center-Of-Exellence/Breast-Cancer-Care.html` | Breast Cancer Care | `Center-Of-Exellence/breast-cancer.html` | |
| [ ] | `Center-Of-Exellence/Lung-Cancer-Care.html` | Lung Cancer Care | `Center-Of-Exellence/lung-cancer.html` | |
| [ ] | `Center-Of-Exellence/Robotic-Surgery.html` | Robotic Surgery | `Center-Of-Exellence/robotic-surgery.html` | |
| [ ] | `Center-Of-Exellence/Bone-Marrow-Transplant.html` | Bone Marrow Transplant | `Center-Of-Exellence/bone-marrow-transplant.html` | |
| [ ] | `Center-Of-Exellence/Paediatric-Oncology.html` | Paediatric Oncology | `Center-Of-Exellence/paediatric-oncology.html` | |
| [ ] | `Center-Of-Exellence/Gynaecologic-Oncology.html` | Gynaecologic Oncology | `Center-Of-Exellence/gynaecologic-oncology.html` | |
| [ ] | `Center-Of-Exellence/Ophthalmic-Oncology.html` | Ophthalmic Oncology | `Center-Of-Exellence/ophthalmic-oncology.html` | |
| [ ] | `Center-Of-Exellence/Head-and-Neck-Oncology.html` | Head and Neck Oncology | `Center-Of-Exellence/head-and-neck-oncology.html` | |

### 5c. Featured doctors — “View Profile” links

| Verified | Broken link | Doctor name | Suggested fix | Your correct link |
|----------|-------------|-------------|---------------|-------------------|
| [ ] | `Doctors/Dr. B. S. Srinath.html` | Dr. B. S. Srinath | `Doctors/Dr-B-S-Srinath.html` | |
| [ ] | `Doctors/Dr. Manjunath Sastry.html` | Dr. Manjunath Sastry | `Doctors/Dr-Manjunath-Sastry.html` | |
| [ ] | `Doctors/Dr. Srivatsa H. G.html` | Dr. Srivatsa H. G. | `Doctors/Dr-Srivatsa-H-G.html` | |
| [ ] | `Doctors/Dr. Sanjeev Kulkarni.html` | Dr. Sanjeev Kulkarni | `Doctors/Dr-Sanjeev-Kulkarni.html` | |
| [ ] | `Doctors/Dr. Vishnu Kurpad.html` | Dr. Vishnu Kurpad | `Doctors/Dr-Vishnu-Kurpad.html` | |
| [ ] | `Doctors/Dr. Abhay K Kattepur.html` | Dr. Abhay K Kattepur | `Doctors/Dr-Abhay-K-Kattepur.html` | |
| [ ] | `Doctors/Dr. Sasi Mouli V. V. H. P. K..html` | Dr. Sasi Mouli V. V. H. P. K. | `Doctors/Dr-Sasi-Mouli-V-V-H-P-K.html` | |
| [ ] | `Doctors/Dr. Kanyadhara Lohitha Krishna.html` | Dr. Kanyadhara Lohitha Krishna | `Doctors/Dr-Kanyadhara-Lohitha-Krishna.html` | |
| [ ] | `Doctors/Dr. Ravi B. Diwakar.html` | Dr. Ravi B. Diwakar | `Doctors/Dr-Ravi-B-Diwakar.html` | |
| [ ] | `Doctors/Dr. Sandhya Appachu M..html` | Dr. Sandhya Appachu M. | `Doctors/Dr-Sandhya-Appachu-M.html` | |
| [ ] | `Doctors/Dr. Vinayak Munirathnam.html` | Dr. Vinayak Munirathnam | `Doctors/Dr-Vinayak-Munirathnam.html` | |
| [ ] | `Doctors/Dr. Vijai Simha.html` | Dr. Vijai Simha | `Doctors/Dr-Vijai-Simha.html` | |
| [ ] | `Doctors/Dr. R. N. Supreeth.html` | Dr. R. N. Supreeth | `Doctors/Dr-R-N-Supreeth.html` | |
| [ ] | `Doctors/Dr. Muddappa Pathikonda.html` | Dr. Muddappa Pathikonda | `Doctors/Dr-Muddappa-Pathikonda.html` | |
| [ ] | `Doctors/Dr. Giri G. V.html` | Dr. Giri G. V. | `Doctors/Dr-Giri-G-V.html` | |
| [ ] | `Doctors/Dr. Karthik S. Rishi.html` | Dr. Karthik S. Rishi | `Doctors/Dr-Karthik-S-Rishi.html` | |
| [ ] | `Doctors/Dr. Pradeep Kumar Reddy D..html` | Dr. Pradeep Kumar Reddy D. | `Doctors/Dr-Pradeep-Kumar-Reddy-D.html` | |
| [ ] | `Doctors/Dr. Harshitha K.html` | Dr. Harshitha K | `Doctors/Dr-Harshitha-K.html` | |
| [ ] | `Doctors/Dr. Annapurna V.html` | Dr. Annapurna V | `Doctors/Dr-Annapurna-V.html` | |
| [ ] | `Doctors/Dr. Rekha B. R..html` | Dr. Rekha B. R. | `Doctors/Dr-Rekha-B-R.html` | |
| [ ] | `Doctors/Dr. Nanjundappa.html` | Dr. Nanjundappa | `Doctors/Dr-Nanjundappa.html` | |
| [ ] | `Doctors/Dr. Karthik N. Rao.html` | Dr. Karthik N. Rao | `Doctors/Dr-Karthik-N-Rao.html` | |
| [ ] | `Doctors/Dr. Sreeram M. P.html` | Dr. Sreeram M. P. | `Doctors/Dr-Sreeram-M-P.html` | |
| [ ] | `Doctors/Dr. Srivatsa Narasimha.html` | Dr. Srivatsa Narasimha | `Doctors/Dr-Srivatsa-Narasimha.html` | |

### 5d. Site search — patient services & diagnosis

| Verified | Broken link | Search label | Suggested fix | Your correct link |
|----------|-------------|--------------|---------------|-------------------|
| [ ] | `patient-services/Insurance-Billing.html` | Insurance Billing | `patient-services/insurance-and-billing.html` | |
| [ ] | `patient-services/International-Patients.html` | International Patients | `patient-services/international-patients.html` | |
| [ ] | `patient-services/Second-Opinion.html` | Second Opinion | `patient-services/second-opinion.html` | |
| [ ] | `Diagnosis-&-Screening/Advanced-Diagnostic-Tests.html` | Advanced Diagnostic Tests | `Diagnosis-&-Screening/advanced-diagnostic-tests.html` | |
| [ ] | `Diagnosis-&-Screening/Cancer-Screening-Packages.html` | Cancer Screening Packages | `Diagnosis-&-Screening/cancer-screening-packages.html` | |

### 5e. Site search — Centres of Excellence (wrong casing)

| Verified | Broken link | Search label | Suggested fix | Your correct link |
|----------|-------------|--------------|---------------|-------------------|
| [ ] | `Center-Of-Exellence/Breast-Cancer-Care.html` | Breast Cancer Care | `Center-Of-Exellence/breast-cancer.html` | |
| [ ] | `Center-Of-Exellence/Lung-Cancer-Care.html` | Lung Cancer Care | `Center-Of-Exellence/lung-cancer.html` | |
| [ ] | `Center-Of-Exellence/Robotic-Surgery.html` | Robotic Surgery | `Center-Of-Exellence/robotic-surgery.html` | |
| [ ] | `Center-Of-Exellence/Bone-Marrow-Transplant.html` | Bone Marrow Transplant | `Center-Of-Exellence/bone-marrow-transplant.html` | |
| [ ] | `Center-Of-Exellence/Paediatric-Oncology.html` | Paediatric Oncology | `Center-Of-Exellence/paediatric-oncology.html` | |
| [ ] | `Center-Of-Exellence/Gynaecologic-Oncology.html` | Gynaecologic Oncology | `Center-Of-Exellence/gynaecologic-oncology.html` | |
| [ ] | `Center-Of-Exellence/Ophthalmic-Oncology.html` | Ophthalmic Oncology | `Center-Of-Exellence/ophthalmic-oncology.html` | |
| [ ] | `Center-Of-Exellence/Head-and-Neck-Oncology.html` | Head and Neck Oncology | `Center-Of-Exellence/head-and-neck-oncology.html` | |

### 5f. Site search — departments (old filenames)

| Verified | Broken link | Search label | Suggested fix | Your correct link |
|----------|-------------|--------------|---------------|-------------------|
| [ ] | `Departments/Biochemistry Department.html` | Biochemistry Department | `Departments/biochemistry.html` | |
| [ ] | `Departments/Bone & Soft Tissue Department.html` | Bone & Soft Tissue | `Departments/bone-and-soft-tissue-oncology.html` | |
| [ ] | `Departments/Cardio_Oncology_Department.html` | Cardio Oncology | `Departments/cardio-oncology.html` | |
| [ ] | `Departments/Clinical_Pharmacology_Department.html` | Clinical Pharmacology | `Departments/clinical-pharmacology.html` | |
| [ ] | `Departments/Medical_Oncology_Department.html` | Community / Medical Oncology | `Departments/medical-oncology.html` | |
| [ ] | `Departments/Domiciliary_Care_Services.html` | Domiciliary Care | `Departments/domiciliary-care.html` | |
| [ ] | `Departments/Endocrinology.html` | Endocrinology | `Departments/endocrinology.html` | |
| [ ] | `Departments/Gastroenterology_Department.html` | Gastroenterology | `Departments/gastroenterology.html` | |
| [ ] | `Departments/Genito-Urinary_Oncology_Care.html` | Genito-Urinary Oncology | `Departments/genitourinary-oncology.html` | |
| [ ] | `Departments/Gynaecological_Oncology_Department.html` | Gynaecological Oncology | `Departments/gynaecological-oncology.html` | |
| [ ] | `Departments/Haemato_Oncology_BMT.html` | Haemato Oncology BMT | `Departments/haemato-oncology-bmt.html` | |
| [ ] | `Departments/Haematopathology_Cancer_Care.html` | Haematopathology | `Departments/haematopathology.html` | |
| [ ] | `Departments/Head_Neck_Cancer_Oncology_Department.html` | Head & Neck Oncology | `Departments/head-and-neck-oncology.html` | |
| [ ] | `Departments/Hepatobiliary_Pancreatic_Oncology.html` | Hepatobiliary Pancreatic | `Departments/hepatobiliary_pancreatic_oncology.html` | |
| [ ] | `Departments/Histopathology_Department_Complete.html` | Histopathology | `Departments/histopathology.html` | |
| [ ] | `Departments/Integrative_Oncology.html` | Integrative Oncology | `Departments/integrative-oncology.html` | |
| [ ] | `Departments/Interventional_Pulmonology_Cancer_Care.html` | Interventional Pulmonology | `Departments/interventional-pulmonology.html` | |
| [ ] | `Departments/Interventional_Radiology_Cancer_Care.html` | Interventional Radiology | `Departments/interventional-radiology.html` | |
| [ ] | `Departments/Microbiology_Virology_Department.html` | Microbiology & Virology | `Departments/microbiology-and-virology.html` | |
| [ ] | `Departments/Molecular_Oncology_Department_Complete.html` | Molecular Oncology | `Departments/molecular-oncology.html` | |
| [ ] | `Departments/Nephrology_Department.html` | Nephrology | `Departments/nephrology.html` | |
| [ ] | `Departments/Neuro_Oncology_Department.html` | Neuro Oncology | `Departments/neuro-oncology.html` | |
| [ ] | `Departments/Nuclear_Medicine_Department.html` | Nuclear Medicine | `Departments/nuclear-medicine.html` | |
| [ ] | `Departments/Nutrition_Dietetics_Enhanced.html` | Nutrition & Dietetics | `Departments/nutrition-and-dietetics.html` | |
| [ ] | `Departments/Onco_Anaesthesiology_Department.html` | Onco Anaesthesiology | `Departments/onco-anaesthesiology.html` | |
| [ ] | `Departments/Ophthalmic_Oncology.html` | Ophthalmic Oncology | `Departments/ophthalmic-oncology.html` | |
| [ ] | `Departments/Paediatric_Oncology_BMT_Centre.html` | Paediatric Oncology BMT | `Departments/paediatric-oncology-bmt.html` | |
| [ ] | `Departments/Pain_Palliative_Care_Department.html` | Pain & Palliative Care | `Departments/pain-and-palliative-care.html` | |
| [ ] | `Departments/Physiotherapy_Rehabilitation_Department.html` | Physiotherapy | `Departments/physiotherapy-and-rehabilitation.html` | |
| [ ] | `Departments/Plastic_Reconstructive_Surgery.html` | Plastic & Reconstructive Surgery | `Departments/plastic-and-reconstructive-surgery.html` | |
| [ ] | `Departments/Psycho_Oncology_Department_Complete.html` | Psycho Oncology | `Departments/psycho-oncology.html` | |
| [ ] | `Departments/Radiation_Oncology_Department.html` | Radiation Oncology | `Departments/radiation-oncology.html` | |
| [ ] | `Departments/Radio_diagnosis_Oncologic_Imaging_Department.html` | Radiodiagnosis | `Departments/radiology-and-oncologic-imaging.html` | |
| [ ] | `Departments/Speech_Swallowing_Therapy.html` | Speech & Swallowing Therapy | `Departments/speech-and-swallowing-therapy.html` | |
| [ ] | `Departments/Surgical_Oncology_Department.html` | Surgical Oncology | `Departments/surgical-oncology.html` | |
| [ ] | `Departments/Transfusion_Medicine_Blood_Centre.html` | Transfusion Medicine | `Departments/transfusion-medicine-and-blood-centre.html` | |

### 5g. Site search — cancer pages (underscore / old naming → hyphen files)

> **Pattern:** Search uses `Underscore_Names.html` or spaces; actual files use `Hyphen-Names.html`.  
> Verify each row; fill **Your correct link** if the suggested file is wrong.

| Verified | Broken link (in search) | Cancer name | Suggested fix | Your correct link |
|----------|-------------------------|-------------|---------------|-------------------|
| [ ] | `Cancer-We-Treat/Acoustic_Neuroma.html` | Acoustic Neuroma | `Cancer-We-Treat/Acoustic-Neuroma.html` | |
| [ ] | `Cancer-We-Treat/Acute Lymphocytic Leukaemia (ALL).html` | Acute Lymphocytic Leukaemia (ALL) | `Cancer-We-Treat/Acute-Lymphocytic-Leukaemia-(ALL).html` | |
| [ ] | `Cancer-We-Treat/Acute_Myeloid_Leukaemia_AML.html` | Acute Myeloid Leukaemia (AML) | `Cancer-We-Treat/Acute-Myeloid-Leukaemia-AML.html` | |
| [ ] | `Cancer-We-Treat/Adrenal_Tumours.html` | Adrenal Tumours | `Cancer-We-Treat/Adrenal-Tumours.html` | |
| [ ] | `Cancer-We-Treat/Appendix_Cancer_Comprehensive_Overview.html` | Appendix Cancer | `Cancer-We-Treat/Appendix-Cancer-Comprehensive-Overview.html` | |
| [ ] | `Cancer-We-Treat/Astrocytoma_IDH_Mutant.html` | Astrocytoma IDH Mutant | `Cancer-We-Treat/Astrocytoma-IDH-Mutant.html` | |
| [ ] | `Cancer-We-Treat/B_cell_Lymphoma.html` | B Cell Lymphoma | `Cancer-We-Treat/B-cell-Lymphoma.html` | |
| [ ] | `Cancer-We-Treat/Biliary_and_Gallbladder_Cancer.html` | Biliary and Gallbladder Cancer | `Cancer-We-Treat/Biliary-and-Gallbladder-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Brain_Metastases.html` | Brain Metastases | `Cancer-We-Treat/Brain-Metastases.html` | |
| [ ] | `Cancer-We-Treat/Breast_Implant_Associated_ALCL.html` | Breast Implant Associated ALCL | `Cancer-We-Treat/Breast-Implant-Associated-ALCL.html` | |
| [ ] | `Cancer-We-Treat/Cancer_of_Unknown_Primary_CUP.html` | Cancer of Unknown Primary (CUP) | `Cancer-We-Treat/Cancer-of-Unknown-Primary-CUP.html` | |
| [ ] | `Cancer-We-Treat/Cervical_Cancer.html` | Cervical Cancer | `Cancer-We-Treat/Cervical-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Acute_Lymphocytic_Leukemia.html` | Childhood Acute Lymphocytic Leukemia | `Cancer-We-Treat/Childhood-Acute-Lymphocytic-Leukemia.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Acute_Myeloid_Leukaemia.html` | Childhood Acute Myeloid Leukaemia | `Cancer-We-Treat/Childhood-Acute-Myeloid-Leukaemia.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Brain_and_Spine_Tumours.html` | Childhood Brain and Spine Tumours | `Cancer-We-Treat/Childhood-Brain-and-Spine-Tumours.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Germ_Cell_Tumours.html` | Childhood Germ Cell Tumours | `Cancer-We-Treat/Childhood-Germ-Cell-Tumours.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Haematology_Disorders.html` | Childhood Haematology Disorders | `Cancer-We-Treat/Childhood-Haematology-Disorders.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Liver_Cancer.html` | Childhood Liver Cancer | `Cancer-We-Treat/Childhood-Liver-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Lymphoma.html` | Childhood Lymphoma | `Cancer-We-Treat/Childhood-Lymphoma.html` | |
| [ ] | `Cancer-We-Treat/Childhood_Melanoma.html` | Childhood Melanoma | `Cancer-We-Treat/Childhood-Melanoma.html` | |
| [ ] | `Cancer-We-Treat/Chronic_Lymphocytic_Leukemia_CLL.html` | Chronic Lymphocytic Leukemia (CLL) | `Cancer-We-Treat/Chronic-Lymphocytic-Leukemia-CLL.html` | |
| [ ] | `Cancer-We-Treat/Chronic_Myeloid_Leukemia_CML.html` | Chronic Myeloid Leukemia (CML) | `Cancer-We-Treat/Chronic-Myeloid-Leukemia-CML.html` | |
| [ ] | `Cancer-We-Treat/Colorectal_Cancer.html` | Colorectal Cancer | `Cancer-We-Treat/Colorectal-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Cutaneous_T_cell_Lymphoma.html` | Cutaneous T Cell Lymphoma | `Cancer-We-Treat/Cutaneous-T-cell-Lymphoma.html` | |
| [ ] | `Cancer-We-Treat/Desmoplastic_Small_Round_Cell_Tumours.html` | Desmoplastic Small Round Cell Tumours | `Cancer-We-Treat/Desmoplastic-Small-Round-Cell-Tumours.html` | |
| [ ] | `Cancer-We-Treat/Ductal_Carcinoma_in_Situ.html` | Ductal Carcinoma in Situ | `Cancer-We-Treat/Ductal-Carcinoma-in-Situ.html` | |
| [ ] | `Cancer-We-Treat/Endometrial_Cancer.html` | Endometrial Cancer | `Cancer-We-Treat/Endometrial-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Esophageal_Cancer.html` | Esophageal Cancer | `Cancer-We-Treat/Esophageal-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Eye_Cancer.html` | Eye Cancer | `Cancer-We-Treat/Eye-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Fallopian_Tube_Cancer.html` | Fallopian Tube Cancer | `Cancer-We-Treat/Fallopian-Tube-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Gestational_Trophoblastic_Disease.html` | Gestational Trophoblastic Disease | `Cancer-We-Treat/Gestational-Trophoblastic-Disease.html` | |
| [ ] | `Cancer-We-Treat/Gynecologic_Cancers.html` | Gynecologic Cancers | `Cancer-We-Treat/Gynecologic-Cancers.html` | |
| [ ] | `Cancer-We-Treat/Head_and_Neck_Cancer.html` | Head and Neck Cancer | `Cancer-We-Treat/Head-and-Neck-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Hodgkin_Lymphoma.html` | Hodgkin Lymphoma | `Cancer-We-Treat/Hodgkin-Lymphoma.html` | |
| [ ] | `Cancer-We-Treat/Hypopharyngeal_Cancer.html` | Hypopharyngeal Cancer | `Cancer-We-Treat/Hypopharyngeal-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Inflammatory_Breast_Cancer.html` | Inflammatory Breast Cancer | `Cancer-We-Treat/Inflammatory-Breast-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Kidney_Cancer.html` | Kidney Cancer | `Cancer-We-Treat/Kidney-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Laryngeal_Cancer.html` | Laryngeal Cancer | `Cancer-We-Treat/Laryngeal-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Liver_Cancer.html` | Liver Cancer | `Cancer-We-Treat/Liver-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Lung_Cancer.html` | Lung Cancer | `Cancer-We-Treat/Lung-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Male_Breast_Cancer.html` | Male Breast Cancer | `Cancer-We-Treat/Male-Breast-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Mantle_Cell_Lymphoma.html` | Mantle Cell Lymphoma | `Cancer-We-Treat/Mantle-Cell-Lymphoma.html` | |
| [ ] | `Cancer-We-Treat/Merkel Cell Carcinoma.html` | Merkel Cell Carcinoma | `Cancer-We-Treat/Merkel-Cell-Carcinoma.html` | |
| [ ] | `Cancer-We-Treat/Metaplastic_Breast_Cancer.html` | Metaplastic Breast Cancer | `Cancer-We-Treat/Metaplastic-Breast-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Multiple_Endocrine_Neoplasia.html` | Multiple Endocrine Neoplasia | `Cancer-We-Treat/Multiple-Endocrine-Neoplasia.html` | |
| [ ] | `Cancer-We-Treat/Multiple_Myeloma.html` | Multiple Myeloma | `Cancer-We-Treat/Multiple-Myeloma.html` | |
| [ ] | `Cancer-We-Treat/Myelodysplastic_Syndrome_MDS.html` | Myelodysplastic Syndrome (MDS) | `Cancer-We-Treat/Myelodysplastic-Syndrome-MDS.html` | |
| [ ] | `Cancer-We-Treat/Myeloproliferative_Neoplasms.html` | Myeloproliferative Neoplasms | `Cancer-We-Treat/Myeloproliferative-Neoplasms.html` | |
| [ ] | `Cancer-We-Treat/Nasopharyngeal_Throat_Cancer.html` | Nasopharyngeal Throat Cancer | `Cancer-We-Treat/Nasopharyngeal-Throat-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Neuroendocrine_Tumours.html` | Neuroendocrine Tumours | `Cancer-We-Treat/Neuroendocrine-Tumours.html` | |
| [ ] | `Cancer-We-Treat/Non_Hodgkin_Lymphoma.html` | Non Hodgkin Lymphoma | `Cancer-We-Treat/Non-Hodgkin-Lymphoma.html` | |
| [ ] | `Cancer-We-Treat/Oropharyngeal_Cancer.html` | Oropharyngeal Cancer | `Cancer-We-Treat/Oropharyngeal-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Osteosarcoma.html` | Osteosarcoma | `Cancer-We-Treat/Osteosarcoma.html` | *(verify exists)* |
| [ ] | `Cancer-We-Treat/Ovarian_Cancer.html` | Ovarian Cancer | `Cancer-We-Treat/Ovarian-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Paget_Disease_of_the_Breast.html` | Paget Disease of the Breast | `Cancer-We-Treat/Paget-Disease-of-the-Breast.html` | |
| [ ] | `Cancer-We-Treat/Pancreatic_Neuroendocrine_Tumours.html` | Pancreatic Neuroendocrine Tumours | `Cancer-We-Treat/Pancreatic-Neuroendocrine-Tumours.html` | |
| [ ] | `Cancer-We-Treat/Pituitary_Tumours.html` | Pituitary Tumours | `Cancer-We-Treat/Pituitary-Tumours.html` | |
| [ ] | `Cancer-We-Treat/RAS_Mutation.html` | RAS Mutation | `Cancer-We-Treat/RAS-Mutation.html` | |
| [ ] | `Cancer-We-Treat/Renal_Medullary_Carcinoma.html` | Renal Medullary Carcinoma | `Cancer-We-Treat/Renal-Medullary-Carcinoma.html` | |
| [ ] | `Cancer-We-Treat/Salivary_Gland_Cancer.html` | Salivary Gland Cancer | `Cancer-We-Treat/Salivary-Gland-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Skull_Base_Tumours.html` | Skull Base Tumours | `Cancer-We-Treat/Skull-Base-Tumours.html` | |
| [ ] | `Cancer-We-Treat/Small_and_Large_Cell_Cervical_Cancer.html` | Small and Large Cell Cervical Cancer | `Cancer-We-Treat/Small-and-Large-Cell-Cervical-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Soft_Tissue_Sarcoma.html` | Soft Tissue Sarcoma | `Cancer-We-Treat/Soft-Tissue-Sarcoma.html` | |
| [ ] | `Cancer-We-Treat/Squamous_Cell_Carcinoma_of_the_Skin.html` | Squamous Cell Carcinoma of the Skin | `Cancer-We-Treat/Squamous-Cell-Carcinoma-of-the-Skin.html` | |
| [ ] | `Cancer-We-Treat/Triple_Negative_Breast_Cancer.html` | Triple Negative Breast Cancer | `Cancer-We-Treat/Triple-Negative-Breast-Cancer.html` | |
| [ ] | `Cancer-We-Treat/Von_Hippel_Lindau_Disease.html` | Von Hippel Lindau Disease | `Cancer-We-Treat/Von-Hippel-Lindau-Disease.html` | |
| [ ] | `Cancer-We-Treat/anal_cancer_webpage.html` | Anal Cancer | `Cancer-We-Treat/anal-cancer.html` | |
| [ ] | `Cancer-We-Treat/basal_cell_carcinoma.html` | Basal Cell Carcinoma | `Cancer-We-Treat/basal-cell-carcinoma.html` | |
| [ ] | `Cancer-We-Treat/bladder_cancer.html` | Bladder Cancer | `Cancer-We-Treat/bladder-cancer.html` | |
| [ ] | `Cancer-We-Treat/bone_cancer_webpage.html` | Bone Cancer | `Cancer-We-Treat/bone-cancer-webpage.html` | |
| [ ] | `Cancer-We-Treat/brain_tumours.html` | Brain Tumours | `Cancer-We-Treat/brain-tumours.html` | |
| [ ] | `Cancer-We-Treat/gallbladder_cancer.html` | Gallbladder Cancer | `Cancer-We-Treat/gallbladder-cancer.html` | |
| [ ] | `Cancer-We-Treat/gastrointestinal_cancer.html` | Gastrointestinal Cancer | `Cancer-We-Treat/gastrointestinal-cancer.html` | |

---

## 6. Repeated banner link (~55 pages)

Same broken link on department, patient-services, research, diagnosis, and centre-of-excellence pages.

| Verified | Broken link | Found on | Suggested fix | Your correct link |
|----------|-------------|----------|---------------|-------------------|
| [ ] | `../Doctors/Cancer-Specialists.html` | All `Departments/*.html`, `patient-services/*.html`, `research/*.html`, `Diagnosis-&-Screening/*.html`, `Center-Of-Exellence/*.html`, `Doctors/cancer-specialists.html` | `../Doctors/cancer-specialists.html` | |

---

## 7. Breadcrumb links

| Verified | Broken link | Found on | Suggested fix | Your correct link |
|----------|-------------|----------|---------------|-------------------|
| [ ] | `../cancer-we-treat/All-Types-Cancer.html` | `patient-services/second-opinion.html`, `international-patients.html`, `Diagnosis-&-Screening/advanced-diagnostic-tests.html` | `../Cancer-We-Treat/cancerpedia-index.html` | |

---

## 8. Contact page

| Verified | Broken link | Found on | Suggested fix | Your correct link |
|----------|-------------|----------|---------------|-------------------|
| [ ] | `../patient-services/Second-Opinion.html` | `headerbutton/contact-us.html` | `../patient-services/second-opinion.html` | |

---

## 9. About Journey (`About-shankara/about-journey.html`) — mobile nav

| Verified | Broken link | Nav label | Suggested fix | Your correct link |
|----------|-------------|-----------|---------------|-------------------|
| [ ] | `index.html` | Home | `../index.html` | |
| [ ] | `about.html` | About Us | `About-Shankara.html` | |
| [ ] | `services.html` | Patient Care | `../patient-services/services.html` | |
| [ ] | `research.html` | Research | `../research/Research.html` | |
| [ ] | `education.html` | Education | `../research/Academics.html` | |
| [ ] | `community.html` | Community | **No page in repo** | |- remove this if present.
| [ ] | `involve.html` | Get Involved | `../headerbutton/Donate.html` | |
| [ ] | `news.html` | News | `../events-and-programs/index.html` | |

---

## 10. Department pages — doctor “View Profile” links

> **Pattern:** `../Doctors/Dr. Full Name.html` → `../Doctors/Dr-Hyphenated-Name.html`  
> Same issue on **all department pages**. Verify each doctor below.

| Verified | Broken link | Department page | Suggested fix | Your correct link |
|----------|-------------|-----------------|---------------|-------------------|
| [ ] | `../Doctors/Dr. Aathma Prasanna.html` | pain-and-palliative-care | `../Doctors/Dr-Aathma-Prasanna.html` | |
| [ ] | `../Doctors/Dr. Abhay K Kattepur.html` | surgical-oncology | `../Doctors/Dr-Abhay-K-Kattepur.html` | |
| [ ] | `../Doctors/Dr. Aditi Raghunathan.html` | medical-oncology | `../Doctors/Dr-Aditi-Raghunathan.html` | |
| [ ] | `../Doctors/Dr. Akhileshwar Namani.html` | molecular-oncology | `../Doctors/Dr-Akhileshwar-Namani.html` | |
| [ ] | `../Doctors/Dr. Anand K. C.html` | paediatric-oncology-bmt | `../Doctors/Dr-Anand-K-C.html` | |
| [ ] | `../Doctors/Dr. Annapurna V.html` | gynaecological-oncology | `../Doctors/Dr-Annapurna-V.html` | |
| [ ] | `../Doctors/Dr. Anulatha Holla.html` | radiology-and-oncologic-imaging | `../Doctors/Dr-Anulatha-Holla.html` | |
| [ ] | `../Doctors/Dr. Archana S..html` | onco-anaesthesiology | `../Doctors/Dr-Archana-S.html` | |
| [ ] | `../Doctors/Dr. Arjun S. Kashyap.html` | interventional-pulmonology | `../Doctors/Dr-Arjun-S-Kashyap.html` | |
| [ ] | `../Doctors/Dr. Aruna Korlimarla.html` | molecular-oncology | `../Doctors/Dr-Aruna-Korlimarla.html` | |
| [ ] | `../Doctors/Dr. Ashitha N. N..html` | molecular-oncology | `../Doctors/Dr-Ashitha-N-N.html` | |
| [ ] | `../Doctors/Dr. Avinash K..html` | cardio-oncology | `../Doctors/Dr-Avinash-K.html` | |
| [ ] | `../Doctors/Dr. B. K. Madhusudan.html` | integrative-oncology | `../Doctors/Dr-B-K-Madhusudan.html` | |
| [ ] | `../Doctors/Dr. B. S. Srinath.html` | surgical-oncology | `../Doctors/Dr-B-S-Srinath.html` | |
| [ ] | `../Doctors/Dr. Bhargav Raj.html` | clinical-pharmacology | `../Doctors/Dr-Bhargav-Raj.html` | |
| [ ] | `../Doctors/Dr. Chaitra V.html` | histopathology | `../Doctors/Dr-Chaitra-V.html` | |
| [ ] | `../Doctors/Dr. Chandrakanta B Patil.html` | cardio-oncology | `../Doctors/Dr-Chandrakanta-B-Patil.html` | |
| [ ] | `../Doctors/Dr. Dipanwita Chakraborty.html` | preventive-oncology | `../Doctors/Dr-Dipanwita-Chakraborty.html` | |
| [ ] | `../Doctors/Dr. Divya Santhosh.html` | radiology-and-oncologic-imaging | `../Doctors/Dr-Divya-Santhosh.html` | |
| [ ] | `../Doctors/Dr. Divya V.html` | histopathology | `../Doctors/Dr-Divya-V.html` | |
| [ ] | `../Doctors/Dr. Divya Vasudevan.html` | onco-anaesthesiology | `../Doctors/Dr-Divya-Vasudevan.html` | |
| [ ] | `../Doctors/Dr. Divya Vishwanatha Kini.html` | radiology-and-oncologic-imaging | `../Doctors/Dr-Divya-Vishwanatha-Kini.html` | |
| [ ] | `../Doctors/Dr. Ganesh Nayak.html` | surgical-oncology | `../Doctors/Dr-Ganesh-Nayak.html` | |
| [ ] | `../Doctors/Dr. Gayathri J..html` | haematopathology | `../Doctors/Dr-Gayathri-J.html` | |
| [ ] | `../Doctors/Dr. Giri G. V.html` | radiation-oncology | `../Doctors/Dr-Giri-G-V.html` | |
| [ ] | `../Doctors/Dr. Girish Rao.html` | head-and-neck-oncology | `../Doctors/Dr-Girish-Rao.html` | |
| [ ] | `../Doctors/Dr. Govinda Babu K.html` | medical-oncology | `../Doctors/Dr-Govinda-Babu-K.html` | |
| [ ] | `../Doctors/Dr. Guruprasad Shenoy.html` | medical-oncology | `../Doctors/Dr-Guruprasad-Shenoy.html` | |
| [ ] | `../Doctors/Dr. Harish B. S.html` | radiology-and-oncologic-imaging | `../Doctors/Dr-Harish-B-S.html` | |
| [ ] | `../Doctors/Dr. Harshitha K.html` | radiation-oncology | `../Doctors/Dr-Harshitha-K.html` | |
| [ ] | `../Doctors/Dr. Janaki Padmakumar.html` | onco-anaesthesiology | `../Doctors/Dr-Janaki-Padmakumar.html` | |
| [ ] | `../Doctors/Dr. Janardhan D. C..html` | neuro-oncology | `../Doctors/Dr-Janardhan-D-C.html` | |
| [ ] | `../Doctors/Dr. Jayashree D. Kulkarni.html` | haematopathology | `../Doctors/Dr-Jayashree-D-Kulkarni.html` | |
| [ ] | `../Doctors/Dr. Jismy Mary Mathew.html` | multiple depts | `../Doctors/Dr-Jismy-Mary-Mathew.html` | |
| [ ] | `../Doctors/Dr. John Chungath.html` | multiple depts | `../Doctors/Dr-John-Chungath.html` | |
| [ ] | `../Doctors/Dr. Kavitha K. S.html` | multiple depts | `../Doctors/Dr-Kavitha-K-S.html` | |
| [ ] | `../Doctors/Dr. Kavitha S. Rao.html` | multiple depts | `../Doctors/Dr-Kavitha-S-Rao.html` | |
| [ ] | `../Doctors/Dr. Lakshmi Krishnamoorthy.html` | biochemistry | `../Doctors/Dr-Lakshmi-Krishnamoorthy.html` | |
| [ ] | `../Doctors/Dr. L. Appaji.html` | multiple depts | `../Doctors/Dr-L-Appaji.html` | |
| [ ] | `../Doctors/Dr. Mallika Ganesh.html` | multiple depts | `../Doctors/Dr-Mallika-Ganesh.html` | |
| [ ] | `../Doctors/Dr. Manasa C.html` | clinical-pharmacology | `../Doctors/Dr-Manasa-C.html` | |
| [ ] | `../Doctors/Dr. Matangi P.html` | multiple depts | `../Doctors/Dr-Matangi-P.html` | |
| [ ] | `../Doctors/Dr. Moupia Goswami.html` | multiple depts | `../Doctors/Dr-Moupia-Goswami.html` | |
| [ ] | `../Doctors/Dr. Muddappa Pathikonda.html` | multiple depts | `../Doctors/Dr-Muddappa-Pathikonda.html` | |
| [ ] | `../Doctors/Dr. N. K. Vinod.html` | multiple depts | `../Doctors/Dr-N-K-Vinod.html` | |
| [ ] | `../Doctors/Dr. Nandini N. Inamdar.html` | multiple depts | `../Doctors/Dr-Nandini-N-Inamdar.html` | |
| [ ] | `../Doctors/Dr. Naveen S. Shetty.html` | bone-and-soft-tissue-oncology | `../Doctors/Dr-Naveen-S-Shetty.html` | |
| [ ] | `../Doctors/Dr. Nethra R.html` | multiple depts | `../Doctors/Dr-Nethra-R.html` | |
| [ ] | `../Doctors/Dr. Nithin K. R.html` | multiple depts | `../Doctors/Dr-Nithin-K-R.html` | |
| [ ] | `../Doctors/Dr. Paturu Kondaiah.html` | multiple depts | `../Doctors/Dr-Paturu-Kondaiah.html` | |
| [ ] | `../Doctors/Dr. Pavithra H.html` | multiple depts | `../Doctors/Dr-Pavithra-H.html` | |
| [ ] | `../Doctors/Dr. Pradeep Kumar N.html` | multiple depts | `../Doctors/Dr-Pradeep-Kumar-N.html` | |
| [ ] | `../Doctors/Dr. Prashanth Kesari.html` | multiple depts | `../Doctors/Dr-Prashanth-Kesari.html` | |
| [ ] | `../Doctors/Dr. Prashanth R Putran.html` | domiciliary-care, pain-and-palliative-care | `../Doctors/Dr-Prashanth-R-Putran.html` | |
| [ ] | `../Doctors/Dr. Prahlad S. T.html` | multiple depts | `../Doctors/Dr-Prahlad-S-T.html` | |
| [ ] | `../Doctors/Dr. Prithvi B. S.html` | multiple depts | `../Doctors/Dr-Prithvi-B-S.html` | |
| [ ] | `../Doctors/Dr. R. N. Supreeth.html` | multiple depts | `../Doctors/Dr-R-N-Supreeth.html` | |
| [ ] | `../Doctors/Dr. R. V. Prabhakara Rao.html` | multiple depts | `../Doctors/Dr-R-V-Prabhakara-Rao.html` | |
| [ ] | `../Doctors/Dr. Raghavendra G.html` | multiple depts | `../Doctors/Dr-Raghavendra-G.html` | |
| [ ] | `../Doctors/Dr. Raghunath B. V.html` | multiple depts | `../Doctors/Dr-Raghunath-B-V.html` | |
| [ ] | `../Doctors/Dr. Raghunath S. K.html` | multiple depts | `../Doctors/Dr-Raghunath-S-K.html` | |
| [ ] | `../Doctors/Dr. Raksha Nadig.html` | multiple depts | `../Doctors/Dr-Raksha-Nadig.html` | |
| [ ] | `../Doctors/Dr. Ramitha R. Bhat.html` | multiple depts | `../Doctors/Dr-Ramitha-R-Bhat.html` | |
| [ ] | `../Doctors/Dr. Ravneet Chhabra.html` | multiple depts | `../Doctors/Dr-Ravneet-Chhabra.html` | |
| [ ] | `../Doctors/Dr. Rekha B. R..html` | multiple depts | `../Doctors/Dr-Rekha-B-R.html` | |
| [ ] | `../Doctors/Dr. Rekha V. Kumar.html` | multiple depts | `../Doctors/Dr-Rekha-V-Kumar.html` | |
| [ ] | `../Doctors/Dr. Ruchitha Rungta.html` | multiple depts | `../Doctors/Dr-Ruchitha-Rungta.html` | |
| [ ] | `../Doctors/Dr. S. Ramkiran.html` | multiple depts | `../Doctors/Dr-S-Ramkiran.html` | |
| [ ] | `../Doctors/Dr. Sainath J. V.html` | multiple depts | `../Doctors/Dr-Sainath-J-V.html` | |
| [ ] | `../Doctors/Dr. Sandhya Appachu M..html` | multiple depts | `../Doctors/Dr-Sandhya-Appachu-M.html` | |
| [ ] | `../Doctors/Dr. Santosh H. S.html` | multiple depts | `../Doctors/Dr-Santosh-H-S.html` | |
| [ ] | `../Doctors/Dr. Santosh O. S.html` | multiple depts | `../Doctors/Dr-Santosh-O-S.html` | |
| [ ] | `../Doctors/Dr. Sasi Mouli V. V. H. P. K..html` | endocrinology, surgical-oncology | `../Doctors/Dr-Sasi-Mouli-V-V-H-P-K.html` | |
| [ ] | `../Doctors/Dr. Sathya Murugasamy.html` | multiple depts | `../Doctors/Dr-Sathya-Murugasamy.html` | |
| [ ] | `../Doctors/Dr. Shanthi Velusamy.html` | multiple depts | `../Doctors/Dr-Shanthi-Velusamy.html` | |
| [ ] | `../Doctors/Dr. Sharath Chandra K. S.html` | multiple depts | `../Doctors/Dr-Sharath-Chandra-K-S.html` | |
| [ ] | `../Doctors/Dr. Shashirekha.html` | multiple depts | `../Doctors/Dr-Shashirekha.html` | |
| [ ] | `../Doctors/Dr. Shilpa V.html` | biochemistry | `../Doctors/Dr-Shilpa-V.html` | |
| [ ] | `../Doctors/Dr. Smitha S.html` | multiple depts | `../Doctors/Dr-Smitha-S.html` | |
| [ ] | `../Doctors/Dr. Somashekar G.html` | multiple depts | `../Doctors/Dr-Somashekar-G.html` | |
| [ ] | `../Doctors/Dr. Somashekar N.html` | cardio-oncology | `../Doctors/Dr-Somashekar-N.html` | |
| [ ] | `../Doctors/Dr. Sonal Asthana.html` | multiple depts | `../Doctors/Dr-Sonal-Asthana.html` | |
| [ ] | `../Doctors/Dr. Sreelakshmi B.html` | multiple depts | `../Doctors/Dr-Sreelakshmi-B.html` | |
| [ ] | `../Doctors/Dr. Sreekala.html` | multiple depts | `../Doctors/Dr-Sreekala.html` | |
| [ ] | `../Doctors/Dr. Sriram V.html` | multiple depts | `../Doctors/Dr-Sriram-V.html` | |
| [ ] | `../Doctors/Dr. Srivatsa H. G.html` | multiple depts | `../Doctors/Dr-Srivatsa-H-G.html` | |
| [ ] | `../Doctors/Dr. Srivatsa Narasimha.html` | multiple depts | `../Doctors/Dr-Srivatsa-Narasimha.html` | |
| [ ] | `../Doctors/Dr. Sruthy S.html` | multiple depts | `../Doctors/Dr-Sruthy-S.html` | |
| [ ] | `../Doctors/Dr. Subhashree T.html` | multiple depts | `../Doctors/Dr-Subhashree-T.html` | |
| [ ] | `../Doctors/Dr. Sudha Sah.html` | multiple depts | `../Doctors/Dr-Sudha-Sah.html` | |
| [ ] | `../Doctors/Dr. Sunil Kalmath.html` | multiple depts | `../Doctors/Dr-Sunil-Kalmath.html` | |
| [ ] | `../Doctors/Dr. Sunitha B. S..html` | domiciliary-care, pain-and-palliative-care | `../Doctors/Dr-Sunitha-B-S.html` | |
| [ ] | `../Doctors/Dr. Sunitha Bhosle.html` | multiple depts | `../Doctors/Dr-Sunitha-Bhosle.html` | |
| [ ] | `../Doctors/Dr. Sushmitha M.html` | multiple depts | `../Doctors/Dr-Sushmitha-M.html` | |
| [ ] | `../Doctors/Dr. Tapas Patra.html` | multiple depts | `../Doctors/Dr-Tapas-Patra.html` | |
| [ ] | `../Doctors/Dr. Teertha Shetty.html` | multiple depts | `../Doctors/Dr-Teertha-Shetty.html` | |
| [ ] | `../Doctors/Dr. Venkatesh P.html` | multiple depts | `../Doctors/Dr-Venkatesh-P.html` | |
| [ ] | `../Doctors/Dr. Venkatachala.html` | multiple depts | `../Doctors/Dr-Venkatachala.html` | |
| [ ] | `../Doctors/Dr. Veerabhadra Gupta.html` | multiple depts | `../Doctors/Dr-Veerabhadra-Gupta.html` | |
| [ ] | `../Doctors/Dr. Vijayaraghavan R. L.html` | multiple depts | `../Doctors/Dr-Vijayaraghavan R-L.html` | |
| [ ] | `../Doctors/Dr. Vinayak Munirathnam.html` | multiple depts | `../Doctors/Dr-Vinayak-Munirathnam.html` | |
| [ ] | `../Doctors/Dr. Vinu Priya D.html` | multiple depts | `../Doctors/Dr-Vinu-Priya-D.html` | |
| [ ] | `../Doctors/Dr. Vishnupriya M.html` | multiple depts | `../Doctors/Dr-Vishnupriya-M.html` | |
| [ ] | `../Doctors/Dr. Vishnu Kurpad.html` | multiple depts | `../Doctors/Dr-Vishnu-Kurpad.html` | |
| [ ] | `../Doctors/Dr. Zankhanna Bush.html` | multiple depts | `../Doctors/Dr-Zankhanna-Bush.html` | |
| [ ] | `../Doctors/Mr. T. V. Kumareshwar.html` | head-and-neck-oncology, speech-and-swallowing-therapy | `../Doctors/Mr-T-V-Kumareshwar.html` | |
| [ ] | `../Doctors/Mrs. Niby J. E.html` | multiple depts | `../Doctors/Mrs-Niby-J-E.html` | |
| [ ] | `../Doctors/Ms. Ananya M.html` | multiple depts | `../Doctors/Ms-Ananya-M.html` | |
| [ ] | `../Doctors/Ms. Jananiee R. Punith.html` | multiple depts | `../Doctors/Ms-Jananiee-R-Punith.html` | |
| [ ] | `../Doctors/Ms. Krithi.html` | multiple depts | `../Doctors/Ms-Krithi.html` | |
| [ ] | `../Doctors/Ms. M. Manila.html` | multiple depts | `../Doctors/Ms-M-Manila.html` | |
| [ ] | `../Doctors/Ms. Rakshatha J.html` | multiple depts | `../Doctors/Ms-Rakshatha-J.html` | |
| [ ] | `../Doctors/Ms. Sahithi Guntamadugu.html` | multiple depts | `../Doctors/Ms-Sahithi-Guntamadugu.html` | |

---

## 11. Placeholder links (`href="#"` — need real destinations) - ignore this complete step no need of any of these links.

| Verified | Page | Link text | Current | Your correct link |
|----------|------|-----------|---------|-------------------|
| [ ] | `Doctors/demo.html` | ESMO | `#` | |
| [ ] | `Doctors/demo.html` | NABH | `#` | |
| [ ] | `Doctors/demo.html` | NABL | `#` | |
| [ ] | `Doctors/demo.html` | Healthcare Achievers | `#` | |
| [ ] | `Doctors/demo.html` | Terms of Use | `#` | `headerbutton/Terms-of-Use,Disclaimer,Sitemap.html` *(suggested)* |
| [ ] | `Doctors/demo.html` | Disclaimer | `#` | `headerbutton/Terms-of-Use,Disclaimer,Sitemap.html` *(suggested)* |
| [ ] | `Doctors/demo.html` | Sitemap | `#` | `headerbutton/Terms-of-Use,Disclaimer,Sitemap.html` *(suggested)* |
| [ ] | `Doctors/demo.html` | Careers | `#` | `headerbutton/Careers.html` *(suggested)* |
| [ ] | `Doctors/demo.html` | BMW Reports | `#` | |

---

## 12. Missing pages (referenced but file does not exist)

| Verified | Referenced URL | Referenced from | Action needed | Your correct link |
|----------|----------------|-----------------|---------------|-------------------|
| [ ] | `Cancer-We-Treat/All-Types-Cancer.html` | Breadcrumbs, header.js | Create page OR redirect | | - in breadcrump which ever pages are been redirecting, make those words as text and remove hyper link.
| [ ] | `Departments/Pain-Palliative-Care_Department.html` | header-home.js | Use existing `pain-and-palliative-care.html` | |
| [ ] | `About-shankara/community.html` | about-journey.html | Create page OR remove link | | - remove link
| [ ] | `headerbutton/SSCHRC Website Privacy Policy.pdf` | Footer | Upload PDF OR external URL | | - headerbutton\SSCHRC-Website-Privacy-Policy.pdf
| [ ] | `headerbutton/Mobile_Application—Privacy_Policy.pdf` | Footer | Upload PDF OR external URL | | - headerbutton\Mobile-Application-Privacy-Policy.pdf

---

## Notes for reviewer

1. **Case sensitivity:** `Cancer-Specialists.html` ≠ `cancer-specialists.html` on Linux servers.
2. **Doctor files:** Actual filenames use hyphens (`Dr-B-S-Srinath.html`), not spaces (`Dr. B. S. Srinath.html`).
3. **After you fill this in:** Share the updated file and I can apply all approved fixes across the codebase.
4. **Optional:** Add your name and date at the top when review is complete.

```
Reviewed by: ___________________
Date: ___________________
```
