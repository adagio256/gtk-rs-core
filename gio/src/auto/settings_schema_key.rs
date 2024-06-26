// This file was generated by gir (https://github.com/gtk-rs/gir)
// from gir-files (https://github.com/gtk-rs/gir-files)
// DO NOT EDIT

use crate::ffi;
use glib::translate::*;

glib::wrapper! {
    #[derive(Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
    pub struct SettingsSchemaKey(Shared<ffi::GSettingsSchemaKey>);

    match fn {
        ref => |ptr| ffi::g_settings_schema_key_ref(ptr),
        unref => |ptr| ffi::g_settings_schema_key_unref(ptr),
        type_ => || ffi::g_settings_schema_key_get_type(),
    }
}

impl SettingsSchemaKey {
    #[doc(alias = "g_settings_schema_key_get_default_value")]
    #[doc(alias = "get_default_value")]
    pub fn default_value(&self) -> glib::Variant {
        unsafe {
            from_glib_full(ffi::g_settings_schema_key_get_default_value(
                self.to_glib_none().0,
            ))
        }
    }

    #[doc(alias = "g_settings_schema_key_get_description")]
    #[doc(alias = "get_description")]
    pub fn description(&self) -> Option<glib::GString> {
        unsafe {
            from_glib_none(ffi::g_settings_schema_key_get_description(
                self.to_glib_none().0,
            ))
        }
    }

    #[doc(alias = "g_settings_schema_key_get_name")]
    #[doc(alias = "get_name")]
    pub fn name(&self) -> glib::GString {
        unsafe { from_glib_none(ffi::g_settings_schema_key_get_name(self.to_glib_none().0)) }
    }

    #[doc(alias = "g_settings_schema_key_get_range")]
    #[doc(alias = "get_range")]
    pub fn range(&self) -> glib::Variant {
        unsafe { from_glib_full(ffi::g_settings_schema_key_get_range(self.to_glib_none().0)) }
    }

    #[doc(alias = "g_settings_schema_key_get_summary")]
    #[doc(alias = "get_summary")]
    pub fn summary(&self) -> Option<glib::GString> {
        unsafe {
            from_glib_none(ffi::g_settings_schema_key_get_summary(
                self.to_glib_none().0,
            ))
        }
    }

    #[doc(alias = "g_settings_schema_key_get_value_type")]
    #[doc(alias = "get_value_type")]
    pub fn value_type(&self) -> glib::VariantType {
        unsafe {
            from_glib_none(ffi::g_settings_schema_key_get_value_type(
                self.to_glib_none().0,
            ))
        }
    }

    #[doc(alias = "g_settings_schema_key_range_check")]
    pub fn range_check(&self, value: &glib::Variant) -> bool {
        unsafe {
            from_glib(ffi::g_settings_schema_key_range_check(
                self.to_glib_none().0,
                value.to_glib_none().0,
            ))
        }
    }
}

impl std::fmt::Display for SettingsSchemaKey {
    #[inline]
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        f.write_str(&self.name())
    }
}
