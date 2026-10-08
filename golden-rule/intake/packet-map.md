# Golden Rule packet blank map

Business name in the survey: Golden Rule Home Care & Concierge Services, LLC.

Each yellow bracket from the packet extract is listed under its document. The question id is the `id` in `questions.json`. `not asked` means Taylor is not asked, with the reason.

Policy numbers are not questions. The preparer numbers them (01-03, 01-04, and so on).

Shared answers:

- `policy_effective` fills `[EFFECTIVE DATE]`, `[VERSION DATE]`, the org chart as-of date, appointment dates, job-description approval dates, the handbook approval date, and signature dates.
- `policy_review` fills `[REVIEW DATE]`, the next-review date on job descriptions, `[DATE AND SUMMARY OF CHANGES]`, and `[AGENCY TO SET REVIEW TIMING]`. The first change-log line is written at adoption. Later lines are added only when a policy actually changes.
- `policy_signer` fills `[NAME, TITLE]` on signature blocks and on the org chart prepared-by line.

Office hours assumption: in 01-04 the extract has 14 `[TIME]` blanks and 7 `[NAME OR ROLE]` blanks. Those are read as one row per day (open, close, who covers). On-call hours are asked separately because the after-hours rules are phone, response time, and backup, not a second weekly grid.

Blanks that could not be mapped: none.

## 00 Packet Cover and How to Use.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[COUNTY LIST]` | not asked | Example in the cover instructions, not a field on this page. The real county list is counties. |
| `[NAME]` | not asked | Example in the cover instructions, not a field on this page. Name blanks are mapped on each form. |
| `[verify with KDHE]` | not asked | Turquoise review tag. Instruction to check KDHE items. Not a question. |

## 01 Agency Structure/01-01 Organizational Chart.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[GOVERNING BODY MEMBER NAMES]` | governing_members | Repeatable rows of name and role. |
| `[ADMINISTRATOR NAME]` | admin_name |  |
| `[ALTERNATE ADMINISTRATOR NAME]` | alt_name |  |
| `[MANAGER NAME(S)]` | manager_names |  |
| `[SEE STAFF ROSTER]` | not asked | Internal cross-reference. Staff names are collected in staff_roster. |
| `[OTHER POSITION, FOR EXAMPLE OFFICE OR SCHEDULING STAFF]` | other_positions |  |
| `[NAME]` | reporting_lines | Name on a reporting line of the chart. |
| `[REPORTS TO]` | reporting_lines | Who that person reports to. |
| `[verify with KDHE that one person may serve as both Administrator and Manager]` | not asked | Turquoise review tag. |
| `[DATE]` | policy_effective | Chart current-as-of date uses the policy effective date. |
| `[NAME, TITLE]` | policy_signer | Prepared by. |

## 01 Agency Structure/01-02 Staff Roster.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[NAME]` | staff_roster |  |
| `[MM/DD/YYYY]` | staff_roster | Start date or planned start. |

## 01 Agency Structure/01-03 Statement of Services Offered.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[verify with KDHE: proposed 2025 amendments would bar changing ostomy bags]` | not asked | Turquoise review tag. The service itself is selected in services. |
| `[verify with KDHE whether off-site errands are within the license or are a separate non-licensed service]` | not asked | Turquoise review tag. The service itself is selected in services. |
| `[OTHER SERVICE]` | services | Other text on the multi-select. |
| `[SEPARATE CLIENT SERVICES POLICY, NOT IN THIS PACKET]` | not asked | Internal cross-reference. Client policies are not in this packet. |
| `[IF THE BUSINESS ALSO OFFERS HOME ORGANIZING, DOWNSIZING, OR CONCIERGE SERVICES, DESCRIBE HOW THEY ARE SEPARATED FROM LICENSED SUPPORTIVE CARE SERVICES.]` | noncare_services | Her intended description. KDHE confirms the wording. |
| `[verify with KDHE how to describe non-care services on the application]` | not asked | Turquoise review tag on the same paragraph. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 01 Agency Structure/01-04 Service Area, Office Hours, and On-Call Policy.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[COUNTY LIST]` | counties | Fourteen [TIME] blanks and seven [NAME OR ROLE] blanks are read as seven days, open and close, plus who covers. |
| `[verify with KDHE: proposed 2025 amendments would require the service area to be within Kansas]` | not asked | Turquoise review tag. |
| `[TIME]` | office_hours | Open and close for each of seven days. Count in the extract: 14. |
| `[NAME OR ROLE]` | office_hours | Who covers that day. Count in the extract: 7. |
| `[LOCATION, FOR EXAMPLE OFFICE DOOR AND WEBSITE]` | hours_posted |  |
| `[ON-CALL PHONE NUMBER]` | oncall_phone |  |
| `[ROLE]` | oncall_preparer | Who prepares the on-call schedule. |
| `[NUMBER]` | oncall_advance_days | Days the schedule is prepared in advance. The other [NUMBER] in this document is minutes, mapped on the next note. |
| `[NUMBER]` | oncall_response_minutes | Minutes to answer or return a call. |
| `[LOCATION]` | oncall_schedule_location | Where the on-call schedule is kept. |
| `[AGENCY TO SET]` | oncall_response_minutes | Tag on the minutes sentence. Same answer as the minutes question. |
| `[PHONE NUMBER]` | backup_phone | Backup number if the on-call manager cannot be reached. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 01 Agency Structure/01-05 Governing Body Documentation.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[ENTITY NAME]` | legal_name | Exact Kansas Secretary of State name. |
| `[GOVERNING BODY, FOR EXAMPLE SOLE MEMBER OF THE LLC OR BOARD OF DIRECTORS]` | governing_type |  |
| `[NONE, OR LIST]` | governing_other | Both lines under 'The governing body will' use this answer, one item per line. |
| `[DATE]` | policy_effective | Date the appointments take effect. |
| `[NAME]` | admin_name | First appointed name is the administrator. The second is the alternate, alt_name. |
| `[NAME]` | alt_name | Second appointed name. |
| `[CITY, MILES]` | admin_residence | Administrator city and miles. The second pair is alt_residence. |
| `[CITY, MILES]` | alt_residence | Alternate administrator city and miles. |
| `[AGENCY TO SET REVIEW TIMING]` | policy_review | How often policies are reviewed. The draft text already says at least annually. |
| `[SEPARATE ANE POLICY, SEE INDEX]` | not asked | Internal cross-reference. The ANE policy is in the packet at 04-05. |
| `[LOCATION]` | ane_file_location | Where the ANE policy is filed. |

## 01 Agency Structure/01-06 Administrator and Alternate Qualifications Worksheet.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[NAME]` | admin_name | First name is the administrator. Second is alt_name. |
| `[NAME]` | alt_name |  |
| `[DATE]` | admin_dob | Date of birth, not a policy date. Second date is alt_dob. |
| `[DATE]` | alt_dob | Alternate date of birth. |
| `[EMPLOYER, ROLE, DATES]` | admin_experience | Second block is alt_experience. |
| `[EMPLOYER, ROLE, DATES]` | alt_experience |  |
| `[DEGREE OR CERTIFICATE, SCHOOL, YEAR]` | admin_education | Second block is alt_education. |
| `[DEGREE OR CERTIFICATE, SCHOOL, YEAR]` | alt_education |  |
| `[CITY, MILES FROM PARENT OFFICE]` | admin_residence | Second block is alt_residence. |
| `[CITY, MILES FROM PARENT OFFICE]` | alt_residence |  |
| `[LICENSE TYPE AND NUMBER, OR NONE]` | admin_license | Second block is alt_license. |
| `[LICENSE TYPE AND NUMBER, OR NONE]` | alt_license |  |
| `[verify with KDHE which qualification standard applies at the time of application]` | not asked | Turquoise review tag. |

## 02 Job Descriptions/02-01 Administrator Job Description.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[CONFIRM WITH CPA OR ATTORNEY]` | not asked | FLSA exempt or non-exempt. Attorney or CPA review tag, not a question. |
| `[AGENCY TO SET]` | pay_ranges | Pay range row for the administrator. |
| `[AGENCY TO SET]` | admin_physical | Lifting and physical demands. |
| `[ADDITIONAL AGENCY REQUIREMENTS, FOR EXAMPLE VALID DRIVER'S LICENSE]` | admin_requirements |  |
| `[ADDITIONAL DUTIES SET BY THE AGENCY]` | admin_duties |  |
| `[AGENCY TO SET DRIVING REQUIREMENTS]` | admin_driving |  |
| `[DATE]` | policy_effective | Job description approved on this date. |
| `[DATE]` | policy_review | Next review date, from the review rhythm. |

## 02 Job Descriptions/02-02 Alternate Administrator Job Description.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[AGENCY TO SET]` | alt_supervises | Who they supervise when not acting as administrator. |
| `[AGENCY TO SET]` | pay_ranges | Pay range row for the alternate administrator. |
| `[AGENCY TO SET]` | alt_physical | Lifting and physical demands. |
| `[CONFIRM WITH CPA OR ATTORNEY]` | not asked | FLSA status. Attorney or CPA review tag. |
| `[ADDITIONAL AGENCY REQUIREMENTS, FOR EXAMPLE VALID DRIVER'S LICENSE]` | alt_requirements |  |
| `[ADDITIONAL DUTIES WHEN NOT ACTING AS ADMINISTRATOR]` | alt_duties |  |
| `[AGENCY TO SET DRIVING REQUIREMENTS]` | alt_driving |  |
| `[DATE]` | policy_effective | Approved on. |
| `[DATE]` | policy_review | Next review. |

## 02 Job Descriptions/02-03 Manager-Supervisor Job Description.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[CONFIRM WITH CPA OR ATTORNEY]` | not asked | FLSA status. Attorney or CPA review tag. |
| `[AGENCY TO SET]` | pay_ranges | Pay range row for the manager. |
| `[AGENCY TO SET]` | manager_physical | Lifting and physical demands. |
| `[AGENCY REQUIREMENTS, FOR EXAMPLE EDUCATION, DRIVER'S LICENSE, SUPERVISORY EXPERIENCE]` | manager_requirements |  |
| `[ADDITIONAL DUTIES]` | manager_duties |  |
| `[AGENCY TO SET DRIVING REQUIREMENTS]` | manager_driving |  |
| `[DATE]` | policy_effective | Approved on. |
| `[DATE]` | policy_review | Next review. |

## 02 Job Descriptions/02-04 Supportive Care Worker Job Description.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[CONFIRM WITH CPA OR ATTORNEY]` | not asked | FLSA status. Attorney or CPA review tag. |
| `[AGENCY TO SET]` | pay_ranges | Pay range row for the supportive care worker. |
| `[AGENCY TO SET]` | worker_lift | Tag on the lifting line that also contains the pounds number. |
| `[AGENCY TO SET; STATE MINIMUM AGE NOT FOUND IN K.A.R. 28-51]` | worker_min_age |  |
| `[AGENCY REQUIREMENTS, FOR EXAMPLE DRIVER'S LICENSE, INSURANCE, RELIABLE TRANSPORTATION, PRIOR EXPERIENCE]` | worker_requirements |  |
| `[ADDITIONAL DUTIES]` | worker_duties |  |
| `[AGENCY TO DESCRIBE]` | worker_homes |  |
| `[NUMBER]` | worker_lift | Pounds. |
| `[AGENCY TO SET DRIVING AND MILEAGE RULES]` | worker_driving | Driving requirements. Mileage reimbursement is also mileage. |
| `[verify with KDHE: draft 2025 amendments would remove this]` | not asked | Turquoise review tag on lift devices. |
| `[DATE]` | policy_effective | Approved on. |
| `[DATE]` | policy_review | Next review. |

## 03 Hiring and Screening/03-01 Hiring Procedure.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[AGENCY TO LIST WHERE JOBS ARE POSTED]` | jobs_posted |  |
| `[NUMBER, FOR EXAMPLE TWO]` | reference_count |  |
| `[verify with CPA]` | not asked | New-hire tax forms. CPA review tag. |
| `[ATTORNEY TO CONFIRM WORDING]` | not asked | Equal-opportunity sentence. Attorney review tag. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 03 Hiring and Screening/03-02 Employment Application.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[MINIMUM AGE]` | worker_min_age |  |
| `[ATTORNEY TO REVIEW criminal history questions on the application for compliance with applicable law.]` | not asked | Attorney review tag. |
| `[ATTORNEY TO CONFIRM]` | not asked | At-will sentence on the application. Attorney review tag. |

## 03 Hiring and Screening/03-03 Interview Form.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[ADDITIONAL QUESTION]` | interview_question |  |

## 03 Hiring and Screening/03-04 Reference Check Policy and Form.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[NUMBER]` | reference_count | How many references. The other two numbers in this document are mapped below. |
| `[NUMBER]` | reference_employer_count | How many must be a past employer or supervisor. |
| `[NUMBER]` | reference_attempts | Attempts before asking for another reference. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 03 Hiring and Screening/03-05 Background Check Policy.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[verify with KDHE/KDADS current portal and fee]` | not asked | Turquoise review tag. background_vendor records whether she will use the KDADS portal the draft already names. |
| `[verify with KDHE/KDADS whether fingerprinting is currently required for supportive care agencies]` | not asked | Turquoise review tag. |
| `[OTHER REGISTRIES]` | other_registries |  |
| `[verify with KDHE/KDADS the exact list of registries defined in KDADS regulations]` | not asked | Turquoise review tag. |
| `[DATE OF KDADS LIST ATTACHED]` | not asked | Date of an attached list the preparer inserts. Not Taylor's fact. |
| `[verify with KDHE what proof is accepted]` | not asked | Turquoise review tag about proof of a prior check. |
| `[AGENCY TO SET, FOR EXAMPLE EVERY TWO YEARS]` | background_recheck |  |
| `[ROLES]` | background_access |  |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 03 Hiring and Screening/03-06 Credential and License Verification.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 03 Hiring and Screening/03-07 Provisional Employment Policy.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[verify with KDHE]` | not asked | Two short tags: submit the KDADS request before provisional work begins, and end provisional work at day 60 if there is no result. |
| `[AGENCY TO SET, FOR EXAMPLE PROVISIONAL EMPLOYEE WORKS ONLY ALONGSIDE A TRAINED EMPLOYEE]` | provisional_supervision | Her intended supervision rule. KDHE confirms whether a provisional worker may be alone in a home. |
| `[verify with KDHE whether a provisional supportive care worker may work alone in a client's home]` | not asked | Turquoise review tag on that supervision sentence. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 04 Onboarding and Training/04-01 Employee Orientation.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[AGENCY TO SET]` | orientation_length | Length and format. |
| `[verify with KDHE]` | not asked | Turquoise review tag. The rules reviewed do not set a minimum orientation length. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |
| `[ADDITIONAL TOPIC]` | orientation_topics |  |

## 04 Onboarding and Training/04-02 Competency Evaluation (Initial).docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[AGENCY TO SET: DIRECT OBSERVATION, RETURN DEMONSTRATION, WRITTEN OR ORAL QUIZ]` | competency_method |  |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |
| `[verify with KDHE]` | not asked | Turquoise review tag on lift devices. |
| `[OTHER]` | competency_other |  |

## 04 Onboarding and Training/04-03 Annual Competency Re-evaluation.docx

No yellow brackets in the extract.

## 04 Onboarding and Training/04-04 Training Records.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[AGENCY TO SET]` | annual_hours | Minimum annual hours. |
| `[verify with KDHE; no hour minimum found in K.A.R. 28-51-117]` | not asked | Turquoise review tag. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 04 Onboarding and Training/04-05 Abuse, Neglect, and Exploitation Policy.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[verify with KDHE that these definitions match the current text of K.S.A. 39-1430]` | not asked | Turquoise review tag. |
| `[verify with KDHE which agency or agencies the employee must report to under K.S.A. 39-1431 for a licensed home health agency]` | not asked | Turquoise review tag. |
| `[AGENCY TO SET INVESTIGATION STEPS]` | ane_steps |  |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 05 Personnel Records and Health/05-01 Personnel File Checklist.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[verify with KDHE: draft 2025 amendments would make this explicit]` | not asked | Turquoise review tag. |
| `[AGENCY TO SET; ATTORNEY TO CONFIRM]` | confidential_records | Her intended way to separate medical and criminal history files. Her attorney confirms it. |
| `[AGENCY TO SET]` | records_retention | How long files are kept after someone leaves. |
| `[verify with KDHE and attorney; no personnel file retention period found in K.A.R. 28-51]` | not asked | Turquoise review tag. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 05 Personnel Records and Health/05-02 Employee Health Records.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[AGENCY TO SET]` | health_frequency | Whether assessments happen more often than every two years. |
| `[AGENCY TO SET]` | health_payer | Who pays. |
| `[ATTORNEY TO CONFIRM ADA AND PRIVACY HANDLING]` | not asked | Attorney review tag. The storage practice is confidential_records. |
| `[verify with KDHE]` | not asked | Turquoise review tag on the 2025 draft health form. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 05 Personnel Records and Health/05-03 TB Screening and Testing.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[verify with KDHE whether an interferon-gamma release assay (IGRA, TB blood test) is accepted instead; CDC allows either, and IGRA does not need two steps]` | not asked | Turquoise review tag. tb_method records the test she intends so the preparer can confirm it with KDHE before changing the draft two-step skin test sentence. |
| `[verify with KDHE how recent a prior test must be]` | not asked | Turquoise review tag. |
| `[AGENCY TO SET, FOR EXAMPLE ANNUAL SYMPTOM SCREEN FOR EMPLOYEES WITH UNTREATED LATENT TB INFECTION, TESTING AFTER KNOWN EXPOSURE, AND ANNUAL TB EDUCATION]` | tb_after |  |
| `[verify with KDHE whether any periodic TB testing is expected]` | not asked | Turquoise review tag on the same paragraph. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 05 Personnel Records and Health/05-04 Performance Evaluations.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[verify with KDHE]` | not asked | Turquoise review tag on the 2025 draft evaluation content. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 06 Discipline and Termination/06-01 Employee Disciplinary Procedure.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[ATTORNEY TO REVIEW]` | not asked | Attorney review of the regulatory basis. |
| `[ATTORNEY TO CONFIRM]` | not asked | Attorney review of the at-will sentence. |
| `[AGENCY TO DEFINE]` | nocall_define | What counts as leaving a client without coverage. |
| `[OTHER]` | discipline_other |  |
| `[AGENCY TO SET]` | removal_pay | With or without pay while removed from client contact. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 06 Discipline and Termination/06-02 Termination Procedure.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[ATTORNEY TO REVIEW]` | not asked | Attorney review of the regulatory basis. |
| `[NUMBER]` | resign_notice | Days of notice asked at resignation. Same number as the handbook. |
| `[OR ROLE]` | termination_decider | Who decides, if not only the administrator. |
| `[ADMINISTRATOR OR GOVERNING BODY]` | termination_confirm |  |
| `[verify with attorney or Kansas Department of Labor: Kansas Wage Payment Act timing for final pay]` | not asked | Legal timing tag. final_pay records what she intends. The attorney or the Kansas Department of Labor confirms the deadline before it is written in. |
| `[POLICY NUMBER]` | not asked | The preparer numbers the policies. Not a question for Taylor. |
| `[EFFECTIVE DATE]` | policy_effective | Shared effective date. |
| `[NAME, TITLE]` | policy_signer | Name and title of the person who signs. |
| `[DATE]` | policy_effective | Signature date uses the effective date, with the signer from policy_signer. |
| `[REVIEW DATE]` | policy_review | The preparer writes the next review date from how often she reviews and the effective date. |
| `[DATE AND SUMMARY OF CHANGES]` | policy_review | The first change-log line is written at adoption: adopted on the effective date. Later lines are added only when a policy changes. |

## 07 Employee Handbook/07-01 Employee Handbook.docx

| Blank | Question | Notes |
| --- | --- | --- |
| `[OWNER WELCOME MESSAGE]` | welcome_message |  |
| `[ADDRESS]` | street | Street, city, and zip together. |
| `[HOURS]` | office_hours | Office hours. The other two [HOURS] blanks are full time and part time. |
| `[HOURS]` | full_time_hours | Full time hours. |
| `[HOURS]` | part_time_hours | Part time hours. |
| `[PHONE]` | oncall_phone | After-hours number. |
| `[COUNTY LIST]` | counties |  |
| `[ATTORNEY TO CONFIRM]` | not asked | Three tags: at-will employment, equal opportunity, and the handbook is not a contract. |
| `[ROLE]` | harassment_role | Who receives a harassment report. The other [ROLE] is who sets schedules. |
| `[ROLE]` | schedule_setter |  |
| `[ALTERNATE ROLE]` | harassment_alternate |  |
| `[AGENCY TO SET]` | full_time_hours | Tag on the job-category sentence. Also part_time_hours. |
| `[AGENCY TO SET]` | mileage | Mileage reimbursement. |
| `[AGENCY TO SET]` | breaks | Breaks and meals. |
| `[AGENCY TO SET]` | illness_rule | Anything added to the contagious-illness rule. |
| `[CPA OR ATTORNEY TO CONFIRM ALL ITEMS IN THIS SECTION, INCLUDING OVERTIME AND TRAVEL TIME RULES FOR HOME CARE WORKERS]` | not asked | Section review tag. Overtime has no separate yellow blank, so it is not its own question. Travel time between clients is travel_pay. |
| `[DAY AND TIME]` | workweek | Start and end of the workweek. |
| `[AGENCY POLICY, CONFIRM COMPENSABILITY WITH CPA OR ATTORNEY]` | travel_pay | Her intended travel-time pay. CPA or attorney confirms it. |
| `[SCHEDULE]` | pay_schedule |  |
| `[DIRECT DEPOSIT OR CHECK]` | pay_method |  |
| `[HOW]` | schedule_how |  |
| `[ROLE AND NUMBER]` | callout_contact |  |
| `[NUMBER]` | callout_hours | Hours of notice before a shift. The other [NUMBER] is resign_notice. |
| `[NUMBER]` | resign_notice | Days of notice to resign. |
| `[AGENCY TO DEFINE CONSEQUENCES]` | nocall_consequences |  |
| `[AGENCY TO SET ANY LIMIT ON SMALL GIFTS]` | gift_limit |  |
| `[AGENCY TO SET PROCEDURE]` | client_money |  |
| `[WORKERS COMPENSATION INSURER AND CLAIM STEPS]` | workers_comp |  |
| `[AGENCY TO SET: WHETHER EMPLOYEES DRIVE CLIENTS, LICENSE AND INSURANCE REQUIREMENTS, MOTOR VEHICLE RECORD REVIEW, AND MILEAGE.]` | drive_clients | Mileage rate is also mileage. |
| `[VERSION DATE]` | policy_effective |  |
| `[DATE]` | policy_effective | Date the governing body approves the handbook. |

## Starter questions that are not a single yellow bracket

These are in the survey because the original intake list asked for them, or because they explain a draft sentence a verify tag would otherwise freeze.

| Question | Why it is here |
| --- | --- |
| dba | Trade name, if it differs from the Secretary of State name. |
| ein | Federal employer identification number for the application and tax records. |
| phone | Main business phone. The on-call number is a separate bracket. |
| email | Business email for the application and the handbook. |
| cities | Cities inside the county list. The packet blank is counties only. |
| oncall_hours | When on-call coverage runs. The weekly time grid is office hours. |
| benefits | Benefits to describe in the handbook. No benefits bracket in the extract. |
| pto | Paid time off. No PTO bracket in the extract. |
| background_vendor | Whether she will use the KDADS portal the draft already names. |
| probation_length | Any tryout period beyond the 60 day background-check window already written in 03-07. |
| competency_evaluator | Who signs the competency form. |
| evaluation_schedule | How often evaluations happen. The form already includes a quarterly supervisory visit. |
| discipline_steps | Confirms or replaces the drafted warning ladder. |
| final_pay | What she intends. The legal deadline stays with her attorney or the Kansas Department of Labor. |
| tb_method | Which test she plans to use. KDHE confirms whether a blood test may replace the draft two-step skin test. |
| records_format | Paper, electronic, or both. No bracket uses those words. |
| records_system | The cabinet or system name that goes with the format. |
