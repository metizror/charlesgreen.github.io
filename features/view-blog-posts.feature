Feature: View blog posts

  As a visitor
  I want to view blog posts
  So I can read the post summary

  @focus
  Scenario: View blog post
    Given I have visited "http://www.charlesgreen.org"
    Then I see one or more blog posts