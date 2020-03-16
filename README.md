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
- [Target Attribute Support for Hyperlink Values](#target-attribute-support-for-hyperlink-values)

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

**Source:**
- src\app\components\views\sc-bizfx-flatview.component.html

### Target Attribute Support for Hyperlink Values
Links in BizFx may direct the user away from the current page, counter-intuitive to the flow of user navigation. Enabling the target attribute to be configured for links, specifically for opening links in a new window or tab via the '_blank' value, improves the UX of customisations to the Business Tools.

For the '_blank' target type, the link is opened in a new window or tab and is rendered with a '^' to signify that the link will be opened externally.

**Dependencies:** https://github.com/ajsuth/Ajsuth.Foundation.Views.Engine/tree/release/9.2/master

![Blank Target opens link in a new window or tab](./images/blank-target-link.png)

_Sample 'Flat' entity view with various UI Types._

To configure a link, the view property should be configured with a new policy with PolicyId "Target" and single model with Name _\<target type\>_, e.g. "_blank". The plugin Ajsuth.Foundation.Views.Engine contains the view property extension method _SetTargetPolicy()_ and contains constants for available values to improve development.

```
// Default target value is '_blank'
entityLinkViewProperty.SetTargetPolicy();

// Specify the target type
itemLinkViewProperty.SetTargetPolicy(ViewsConstants.ViewProperty.Targets.Self);
```

**Source:**
- src\app\components\views\sc-bizfx-viewproperty-bytype.component.html
- src\app\components\views\sc-bizfx-viewproperty-bytype.component.ts
- src\app\components\views\sc-bizfx-viewproperty-byui.component.html
- src\app\components\views\sc-bizfx-viewproperty-byui.component.ts

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
