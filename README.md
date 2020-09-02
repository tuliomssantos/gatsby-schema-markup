# Add Schema Markup To Gatsby Pages

>Schema Markup helps the search engines understand what your event or course is about and who your target audience is so they can make a match and help your event stand out in search. Schema Markup makes you eligible to showcase your event with pictures, venue, dates, times, pricing, and availability.

## Steps
1.  Determine the schema types you want to focus on.
2.  Review Google's structured data guidelines.
3.  Choose a format. *(Google recommends JSON-LD)*.
4.  Implement the markup.
    
    * Update the seo.js file following the example of this repository.
    * Implement the schema in your pages like in the index.js page of this project.
    * Check if the script is present in the Head tag
    * Test your script in https://search.google.com/test/rich-results
  
## Recommended Schema Types
1.  Organization
2.  Website
3.  Product
4.  AggregateRating
5.  BlogPosting
6.  FAQPage
7.  Event
8.  Recipe
9.  VideoObject

##  Google's Guidelines
* Content must be visible.
* Markup must be complete.
* Should be placed on the page that it applies to.

##  Pages and Tools
* https://schema.org/
* https://technicalseo.com/tools/schema-markup-generator/
* https://search.google.com/test/rich-results