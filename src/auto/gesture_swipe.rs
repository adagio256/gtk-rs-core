// This file was generated by gir (c3b4020) from gir-files (71d73f0)
// DO NOT EDIT

use EventController;
use Gesture;
use GestureSingle;
#[cfg(feature = "v3_14")]
use Widget;
use ffi;
use glib::object::Downcast;
use glib::object::IsA;
#[cfg(feature = "v3_14")]
use glib::signal::connect;
use glib::translate::*;
#[cfg(feature = "v3_14")]
use glib_ffi;
#[cfg(feature = "v3_14")]
use libc;
#[cfg(feature = "v3_14")]
use std::boxed::Box as Box_;
#[cfg(feature = "v3_14")]
use std::mem;
#[cfg(feature = "v3_14")]
use std::mem::transmute;

glib_wrapper! {
    pub struct GestureSwipe(Object<ffi::GtkGestureSwipe>): GestureSingle, Gesture, EventController;

    match fn {
        get_type => || ffi::gtk_gesture_swipe_get_type(),
    }
}

impl GestureSwipe {
    #[cfg(feature = "v3_14")]
    pub fn new<T: IsA<Widget>>(widget: &T) -> GestureSwipe {
        skip_assert_initialized!();
        unsafe {
            Gesture::from_glib_full(ffi::gtk_gesture_swipe_new(widget.to_glib_none().0)).downcast_unchecked()
        }
    }

    #[cfg(feature = "v3_14")]
    pub fn get_velocity(&self) -> Option<(f64, f64)> {
        unsafe {
            let mut velocity_x = mem::uninitialized();
            let mut velocity_y = mem::uninitialized();
            let ret = from_glib(ffi::gtk_gesture_swipe_get_velocity(self.to_glib_none().0, &mut velocity_x, &mut velocity_y));
            if ret { Some((velocity_x, velocity_y)) } else { None }
        }
    }

    #[cfg(feature = "v3_14")]
    pub fn connect_swipe<F: Fn(&GestureSwipe, f64, f64) + 'static>(&self, f: F) -> u64 {
        unsafe {
            let f: Box_<Box_<Fn(&GestureSwipe, f64, f64) + 'static>> = Box_::new(Box_::new(f));
            connect(self.to_glib_none().0, "swipe",
                transmute(swipe_trampoline as usize), Box_::into_raw(f) as *mut _)
        }
    }
}

#[cfg(feature = "v3_14")]
unsafe extern "C" fn swipe_trampoline(this: *mut ffi::GtkGestureSwipe, velocity_x: libc::c_double, velocity_y: libc::c_double, f: glib_ffi::gpointer) {
    callback_guard!();
    let f: &Box_<Fn(&GestureSwipe, f64, f64) + 'static> = transmute(f);
    f(&from_glib_none(this), velocity_x, velocity_y)
}
