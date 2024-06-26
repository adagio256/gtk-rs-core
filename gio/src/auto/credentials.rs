// This file was generated by gir (https://github.com/gtk-rs/gir)
// from gir-files (https://github.com/gtk-rs/gir-files)
// DO NOT EDIT

use crate::ffi;
use glib::translate::*;

glib::wrapper! {
    #[doc(alias = "GCredentials")]
    pub struct Credentials(Object<ffi::GCredentials, ffi::GCredentialsClass>);

    match fn {
        type_ => || ffi::g_credentials_get_type(),
    }
}

impl Credentials {
    #[doc(alias = "g_credentials_new")]
    pub fn new() -> Credentials {
        unsafe { from_glib_full(ffi::g_credentials_new()) }
    }

    #[doc(alias = "g_credentials_is_same_user")]
    pub fn is_same_user(&self, other_credentials: &Credentials) -> Result<(), glib::Error> {
        unsafe {
            let mut error = std::ptr::null_mut();
            let is_ok = ffi::g_credentials_is_same_user(
                self.to_glib_none().0,
                other_credentials.to_glib_none().0,
                &mut error,
            );
            debug_assert_eq!(is_ok == glib::ffi::GFALSE, !error.is_null());
            if error.is_null() {
                Ok(())
            } else {
                Err(from_glib_full(error))
            }
        }
    }

    #[doc(alias = "g_credentials_to_string")]
    #[doc(alias = "to_string")]
    pub fn to_str(&self) -> glib::GString {
        unsafe { from_glib_full(ffi::g_credentials_to_string(self.to_glib_none().0)) }
    }
}

impl Default for Credentials {
    fn default() -> Self {
        Self::new()
    }
}

impl std::fmt::Display for Credentials {
    #[inline]
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        f.write_str(&self.to_str())
    }
}
