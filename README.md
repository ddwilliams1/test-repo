Lead Developer:
- Adhere to the Release Management Plan processes and procedures to ensure proper release version(s), and labeling is correct during release planning.
- Notify CM (distribution list), when ready for release to lower environments (e.g., SIT, CAT, UAT, PATCH, etc.), and include Feature Branch URL.
- Create RFCs where the release label is identified in the description
- Creates Pull Requests to the main branch (e.g., release branch), and ensures proper descriptions for Title, Tag to trigger the GitHub Actions automation

NOTE: All tags must follow “Semantic Versioning” guidelines (e.g., Major.Minor.Build). 
-	Pull Request Title: Project Name and Release Version (e.g. Project Name Release ##.#.#.#, EOP-45 Release 24.1.1.0)
-	Pull Request Description format: Tag: v##.#.#.# (Tag: v24.1.1.0)

Project(s) with Subproject(s) 
Project_SubProject_XX.Y.Z.Za

Examples:  
- ERA_Base_24.1.1.0
- ERA2.0_ADIS_24.1.1.1a

Where:
| **Project**    | ERA, ERA 2.0, EOP, NAC, NextGen DAS, NextGen HMS, NextGen, CMRS, etc.                                                                         |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **Subproject** | AAD, BASE, ADIS, NAC, DAS, CRI, EOP-43, EOP-44 OPA for ERA and PERL, ADDRESS and URTS for NDC, etc.                                           |                  
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **XX**         | The last two digits of the current calendar year.                                                                                             |
| **Y**          | The Release Number, e.g. 1, 2, 3…, …10, 11, 12, etc. This number is assigned in incrementing order and corresponds to new major developments. |
| **Z.Z**        | The iterative Build Number, e.g. 0.0, 1.0, 2.0 (Major Build),                                                                                 |
| **a**          | Denotes an Emergency change                                                                                                                   |
