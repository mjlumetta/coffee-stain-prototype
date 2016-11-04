require 'test_helper'

class SiteTest < ActionDispatch::IntegrationTest
  test "get home" do 
  	get root_path
  	assert_response :success
  	assert_template 'pages/home'
  end
end
