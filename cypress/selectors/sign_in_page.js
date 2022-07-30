export const sign_in_page = {
  logo_image: '.makeStyles-logo-3',
  title_text: '.MuiTypography-h5',
  username_field: '#username',
  password_field: '#password',
  username_placeholder_field: '#username-label',
  password_placeholder_field: '#password-label',
  username_helper_text: '#username-helper-text',
  password_helper_text: '#password-helper-text',
  checkbox: '[class="PrivateSwitchBase-input-14"]',
  disabled_sign_in_button:'[data-test="signin-submit"]',
  enabled_sign_in_button: '[class="MuiButton-label"]',
  dont_have_an_account_link: '[data-test="signup"]',
  link_to_cypress: '[target="_blank"]',
  logout_aft_sing_up_button: '[data-test="user-onboarding-logout"]',
  get_selector_for_date(date){
    return `date today ${date}`
  }
}