# Dynamics 365 Customization Documentation

## Overview

This documentation outlines the customization choices made for the Dynamics 365 Customer Engagement (CRM) system. The customization focuses on managing customer preferences for the fictitious business scenario of XYZ Corp.

### Entity Schema: new_customerpreferences

- **Attributes:**
  - `new_customername`: Represents the customer name.
  - `new_preferencetype`: Represents the type of customer preference.
  - `new_description`: Represents a description of the customer preference.

### Relationships

- **Relationship with Account:**
  - Established a one-to-many relationship between the "Customer Preferences" entity (`new_customerpreferences`) and the existing "Account" entity (`account`).

### Forms and Views

- **Account Form Customization:**
  - Added custom tabs, sections, and fields on the "Account" form to display customer preferences using sub-grids.
  - Created tabs for general information and customer preferences.
  
- **System View:**
  - Implemented a system view named "Active Accounts with Preferences" to display a list of accounts along with their associated preferences.

### Business Logic

- **Data Validation:**
  - Implemented JavaScript logic on the "Customer Preferences" form to enforce data validation rules.
  - Validates that the "Preference Type" and "Description" fields are required before saving.

### Security Role Configuration

- **Salesperson Role:**
  - Configured privileges for the "Salesperson" role to control access to the "Customer Preferences" entity.
  - Privileges include reading, writing, creating, and associating records in the "Customer Preferences" entity.

## Usage

To use this customization:

1. Import the provided customization files into your Dynamics 365 instance.
2. Ensure that the necessary security roles are configured as per the documentation.
3. Test the customization in a development environment before deploying to production.

## Contributions

Contributions to this customization are welcome. Please follow the guidelines in the CONTRIBUTING.md file.

## License

This customization is licensed under the [MIT License](LICENSE).

