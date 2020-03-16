# Extended Sitecore Commerce BizFx
Custom Sitecore Commerce BizFx project with extended functionality for the Business Tools.

- [Supported Sitecore Experience Commerce Versions](#supported-sitecore-experience-commerce-versions)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
- [Known Issues](#known-issues)
- [Disclaimer](#disclaimer)

## Supported Sitecore Experience Commerce Versions
- XC 9.2

## Features
- [UI Types Enabled in Flat Entity Views](#ui-types-enabled-in-flat-entity-views)

### UI Types Enabled in Flat Entity Views
For entity views of UI Hint type _'Flat'_, the view properties' UI Types are now resolved and rendered accordingly.

This includes the following UI Types:
- Entity Link
- Item Link
- Sub Item Link
- Html
- Multiline (doesn't format new lines, technically renders as per default string data type)
- List
- Download CSV
- String By Data Type (OriginalType)
  - DateTimeOffset
    - FullDateTime UI Type will render the time as well
  - Decimal
  - Sitecore.Commerce.Core.Money
  - Html
  - List
  - String (default)

![UI Types rendered in a sample flat entity view](./images/ui-types-in-flat-entity-view.png)

_Sample 'Flat' entity view with various UI Types._

**Source:** src\app\components\views\sc-bizfx-flatview.component.html

## Installation Instructions
1. Download the repository.
2. Diff the change between the repository's _src_ folder and your BizFx development solution, ensuring changes don't conflict with any changes introduced by you and your team.
3. Copy the _src_ folder into the BizFx solution (not the deployed website folder). Alternatively, copy only the files listed for a specific feature to only introduce a subset of features to your solution.
4. Build and deploy the BizFx solution as per your preferred approach.

## Known Issues
| Feature                 | Description | Issue |
| ----------------------- | ----------- | ----- |
|                         |             |       |

## Disclaimer
The code provided in this repository is sample code only. It is not intended for production usage and not endorsed by Sitecore.
Both Sitecore and the code author do not take responsibility for any issues caused as a result of using this code.
No guarantee or warranty is provided and code must be used at own risk.
