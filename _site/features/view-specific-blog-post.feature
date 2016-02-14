Feature: View specific blog post

  As a visitor
  I want to view a specific blog post
  So I can read the full blog post

  @focus
  Scenario: View specific blog post
    Given I have visited "http://www.charlesgreen.org"
    When I open a specific blog post
    Then I see the full blog post