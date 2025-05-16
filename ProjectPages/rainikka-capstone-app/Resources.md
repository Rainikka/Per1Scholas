## Project Inspiration

## Project Overview

School Data Dashboard was created with the MERN stack and has thefollowing features:

- Seed data on 280 NYC schools with each individual school having 78 variables:

1. SchoolID String [true, "Enter the school ID"]
2. SchoolDBN String [true, "Enter the school district borough number"]
3. SchoolName String [true, "Enter the school name"]
4. StreetAddress String [true, "Enter the school's street address"]
5. ZipCode Number [true, "Enter the school's zip code"]
6. Neighborhood String [false, "Enter school neighborhood"]
7. District Number [true, "Enter school district number"]
8. Borough String [true, "Select school borough"]
9. SchoolType String [true, "Select school type"]
10. GradeLevel String [true, "Select grade level"]
11. CommunitySchool Boolean [true, "Is the school a community school"]
12. CommunityBasedOrg String [false, "Enter the community-based partner for the school"]
13. PartnershipYearStart Number [false, "Select the year the community partnership started"]
14. DataForSchoolYear Number [false, "Select the school year for the school data being entered"]
15. Enrollment Number [true, "Enter total number of students enrolled in school"]
16. FemaleStudents Number [true, "Enter the percentage of students that are female"]
17. MaleStudents Number [true, "Enter the percentage of students that are male"]
18. SpecialNeedStudents Number [true, "Enter the percentage of students with special needs"]
19. ELLStudents Number [true, "Enter the percentage of students that are English Language Learners"]
20. LivingInPoverty Number [true, "Enter the percentage of students 80% below federal poverty line"]
21. EconomicNeed Number [true, "Enter the percentage of students that in economic need"]
22. AsianStudents Number [true, "Enter the percentage of students identified as Asian"]
23. BlackStudents Number [true, "Enter the percentage of students identified as Black"]
24. LatinoStudents Number [true, "Enter the percentage of students identified as Latino"]
25. MultiRaceStudents Number [true, "Enter the percentage of students identified as Multi-racial"]
26. NativeStudents Number [true, "Enter the percentage of students identified as Native American"]
27. WhiteStudents Number [true, "Enter the percentage of students identified as White"]
28. OtherStudents Number [true, "Enter the percentage of students identified as Other"]
29. Attendance2018Rate Number [false, "Enter the school attendance rate for 2018"]
30. Attendance2019Rate Number [false, "Enter the school attendance rate for 2019"]
31. Attendance2020Rate Number [false, "Enter the school attendance rate for 2020"]
32. Attendance2021Rate Number [false, "Enter the school attendance rate for 2021"]
33. Attendance2022Rate Number [false, "Enter the school attendance rate for 2022"]
34. Attendance2023Rate Number [false, "Enter the school attendance rate for 2023"]
35. Attendance2024Rate Number [false, "Enter the school attendance rate for 2024"]
36. Attendance2025Rate Number [false, "Enter the school attendance rate for 2025"]
37. Chronically2018Absent Number [false, "Enter the percentage of students chronically absent for 2018"]
38. Chronically2019Absent Number [false, "Enter the percentage of students chronically absent for 2019"]
39. Chronically2020Absent Number [false, "Enter the percentage of students chronically absent for 2020"]
40. Chronically2021Absent Number [false, "Enter the percentage of students chronically absent for 2021"]
41. Chronically2022Absent Number [false, "Enter the percentage of students chronically absent for 2022"]
42. Chronically2023Absent Number [false, "Enter the percentage of students chronically absent for 2023"]
43. Chronically2024Absent Number [false, "Enter the percentage of students chronically absent for 2024"]
44. Chronically2025Absent Number [false, "Enter the percentage of students chronically absent for 2025"]
45. Avg2018ELAScore Number [false, "Enter the average score for English Language Arts in 2018"]
46. Avg2019ELAScore Number [false, "Enter the average score for English Language Arts in 2019"]
47. Avg2020ELAScore Number [false, "Enter the average score for English Language Arts in 2020"]
48. Avg2021ELAScore Number [false, "Enter the average score for English Language Arts in 2021"]
49. Avg2022ELAScore Number [false, "Enter the average score for English Language Arts in 2022"]
50. Avg2023ELAScore Number [false, "Enter the average score for English Language Arts in 2023"]
51. Avg2024ELAScore Number [false, "Enter the average score for English Language Arts in 2024"]
52. Avg2025ELAScore Number [false, "Enter the average score for English Language Arts in 2025"]
53. Proficient2018ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2018"]
54. Proficient2019ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2019"]
55. Proficient2020ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2020"]
56. Proficient2021ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2021"]
57. Proficient2022ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2022"]
58. Proficient2023ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2023"]
59. Proficient2024ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2024"]
60. Proficient2025ELA Number [false, "Enter the percentage of student scores at or above the proficient level for ELA in 2025"]
61. Avg2018MathScore Number [false, "Enter the average score for Math in 2018"]
62. Avg2019MathScore Number [false, "Enter the average score for Math in 2019"]
63. Avg2020MathScore Number [false, "Enter the average score for Math in 2020"]
64. Avg2021MathScore Number [false, "Enter the average score for Math in 2021"]
65. Avg2022MathScore Number [false, "Enter the average score for Math in 2022"]
66. Avg2023MathScore Number [false, "Enter the average score for Math in 2023"]
67. Avg2024MathScore Number [false, "Enter the average score for Math in 2024"]
68. Avg2025MathScore Number [false, "Enter the average score for Math in 2025"]
69. Proficient2018Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2018"]
70. Proficient2019Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2019"]
71. Proficient2020Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2020"]
72. Proficient2021Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2021"]
73. Proficient2022Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2022"]
74. Proficient2023Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2023"]
75. Proficient2024Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2024"]
76. Proficient2025Math Number [false, "Enter the percentage of student scores at or above the proficient level for Math in 2025"]
77. SchoolLatitude Number [false, "Enter the latitudinal coordinates of the school"]
78. SchoolLongitude Number [false, "Enter the longitudinal coordinates of the school"]
79. timestamps

- Two models:

  - District Administrator:
    - Capabilities: Create, Read, Update, Delete
    - Means to Access Data: Form
    -
  - General Public User:

    - Capabilities: GET all or GET data on one school
    - Means to Access Data: Drop-down selector on Data Dashboard

  - Pages
    - Data dashboard on two pages
      - Page with school demographic data, attendance data and NYC map with school locaton starred
      - Page with school schievement data on ELA and Math
      - Selector with each schools as an opton and autopopulates each dashboard
      - CRUD operations performed with form are instantly updated on dara dashboard
    - All pages have navigation to the other pages

## Technology Employed

#### WireFrame

- MS Excel :: Wireframe Model
- Minify :: Convert MS Excel Data to JSON Object

#### BackEnd

- Title: Final Office Hours

- Creator: Sir Bryan Santos
-
- MS Excel: Wireframe of capstone project

#### FrontEnd

## Project Tutorials

- Title: Final Office Hours
- Creator: Sir Bryan Santos
- Medium: Per Scholas Instructure

- Title: API Tutorial
- Creator: Coding Creativelyfor Free Code Camp
- Medium: YouTube

- Title: Submit Form Data To REST API In A React App
- Creator: CodeARIV
- Medium: YouTube

- Title: React & Form Data
- Creator: Cosden Solution
- Medium: YouTube

- Title: Get Started with Chart.js
- Creator: Chart.js
- Medium: Article

- Title: Get Started with Chart.js
- Creator: Chart.js
- Medium: Article

- Title: ReactC harts-Simple, Immersive Interactive Charts for React
- Creator: React Charts
- Medium: Article

## Research Resources

### NYC School Data

https://sites.google.com/mynycschool.org/newyorkcitycommunityschools/our-schools-1

### Rand Report On The Impact of COVID on NYC Schools

- Illustrating the Promise of Community Schools
  An Assessment of the Impact of the New York City Community Schools Initiative
  William R. Johnston, John Engberg, Isaac M. Opper, Lisa Sontag-Padilla, Lea Xenakis
  RESEARCH Published Jan 28, 2020
  https://www.rand.org/pubs/research_reports/RR3245.html

### NYCDOE Open Data

https://tools.nycenet.edu/dashboard/#dbn=07X334&report_type=HS&view=City

### NYC Open Data

- 2019-20 Demographic Data In NYC Public Schools Suppressed - Pre-K, K-8 & 9-12 Grades
- 2016-17 - 2020-23 Citywide End-of-Year Attendance and Chronic Absenteeism Data

### NYCDOE Office of Organizational Data: LCGMS Report (Location Data)

https://infohub.nyced.org/in-our-schools/operations/lcgms
