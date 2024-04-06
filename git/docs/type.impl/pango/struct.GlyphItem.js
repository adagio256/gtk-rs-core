(function() {var type_impls = {
"pango":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><a href=\"#impl-Clone-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#impl-Debug-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#25-103\">source</a><a href=\"#impl-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_attrs\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#55-63\">source</a><h4 class=\"code-header\">pub fn <a href=\"pango/struct.GlyphItem.html#tymethod.apply_attrs\" class=\"fn\">apply_attrs</a>(&amp;mut self, text: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, list: &amp;<a class=\"struct\" href=\"pango/struct.AttrList.html\" title=\"struct pango::AttrList\">AttrList</a>) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Splits a shaped item (<a href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\"><code>GlyphItem</code></a>) into multiple items based\non an attribute list.</p>\n<p>The idea is that if you have attributes that don’t affect shaping,\nsuch as color or underline, to avoid affecting shaping, you filter\nthem out (<a href=\"pango/struct.AttrList.html#method.filter\" title=\"method pango::AttrList::filter\"><code>AttrList::filter()</code></a>), apply the shaping process\nand then reapply them to the result using this function.</p>\n<p>All attributes that start or end inside a cluster are applied\nto that cluster; for instance, if half of a cluster is underlined\nand the other-half strikethrough, then the cluster will end\nup with both underline and strikethrough attributes. In these\ncases, it may happen that @item-&gt;extra_attrs for some of the\nresult items can have multiple attributes of the same type.</p>\n<p>This function takes ownership of @self; it will be reused\nas one of the elements in the list.</p>\n<h6 id=\"text\"><a class=\"doc-anchor\" href=\"#text\">§</a><code>text</code></h6>\n<p>text that @list applies to</p>\n<h6 id=\"list\"><a class=\"doc-anchor\" href=\"#list\">§</a><code>list</code></h6>\n<p>a <a href=\"pango/struct.AttrList.html\" title=\"struct pango::AttrList\"><code>AttrList</code></a></p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<p>a\nlist of glyph items resulting from splitting @self. Free\nthe elements using <code>Pango::GlyphItem::free()</code>, the list using\ng_slist_free().</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.split\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#94-102\">source</a><h4 class=\"code-header\">pub fn <a href=\"pango/struct.GlyphItem.html#tymethod.split\" class=\"fn\">split</a>(&amp;mut self, text: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, split_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Modifies @self to cover only the text after @split_index, and\nreturns a new item that covers the text before @split_index that\nused to be in @self.</p>\n<p>You can think of @split_index as the length of the returned item.\n@split_index may not be 0, and it may not be greater than or equal\nto the length of @self (that is, there must be at least one byte\nassigned to each item, you can’t create a zero-length item).</p>\n<p>This function is similar in function to pango_item_split() (and uses\nit internally.)</p>\n<h6 id=\"text-1\"><a class=\"doc-anchor\" href=\"#text-1\">§</a><code>text</code></h6>\n<p>text to which positions in @self apply</p>\n<h6 id=\"split_index\"><a class=\"doc-anchor\" href=\"#split_index\">§</a><code>split_index</code></h6>\n<p>byte index of position to split item, relative to the\nstart of the item</p>\n<h5 id=\"returns-1\"><a class=\"doc-anchor\" href=\"#returns-1\">§</a>Returns</h5>\n<p>the newly allocated item\nrepresenting text before @split_index, which should be freed\nwith pango_glyph_item_free().</p>\n</div></details></div></details>",0,"pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><a href=\"#impl-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><h4 class=\"code-header\">pub fn <a href=\"pango/struct.GlyphItem.html#tymethod.as_ptr\" class=\"fn\">as_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a><a class=\"struct\" href=\"pango_sys/struct.PangoGlyphItem.html\" title=\"struct pango_sys::PangoGlyphItem\">PangoGlyphItem</a></h4></section></summary><div class=\"docblock\"><p>Return the inner pointer to the underlying C value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_glib_ptr_borrow\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"pango/struct.GlyphItem.html#tymethod.from_glib_ptr_borrow\" class=\"fn\">from_glib_ptr_borrow</a>&lt;'a&gt;(\n    ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const </a><a class=\"struct\" href=\"pango_sys/struct.PangoGlyphItem.html\" title=\"struct pango_sys::PangoGlyphItem\">PangoGlyphItem</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a Self</a></h4></section></summary><div class=\"docblock\"><p>Borrows the underlying C value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_glib_ptr_borrow_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"pango/struct.GlyphItem.html#tymethod.from_glib_ptr_borrow_mut\" class=\"fn\">from_glib_ptr_borrow_mut</a>&lt;'a&gt;(\n    ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut </a><a class=\"struct\" href=\"pango_sys/struct.PangoGlyphItem.html\" title=\"struct pango_sys::PangoGlyphItem\">PangoGlyphItem</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a mut Self</a></h4></section></summary><div class=\"docblock\"><p>Borrows the underlying C value mutably.</p>\n</div></details></div></details>",0,"pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/glyph_item.rs.html#7-46\">source</a><a href=\"#impl-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.item\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/glyph_item.rs.html#8-10\">source</a><h4 class=\"code-header\">pub fn <a href=\"pango/struct.GlyphItem.html#tymethod.item\" class=\"fn\">item</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pango/struct.Item.html\" title=\"struct pango::Item\">Item</a></h4></section><section id=\"method.glyph_string\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/glyph_item.rs.html#12-14\">source</a><h4 class=\"code-header\">pub fn <a href=\"pango/struct.GlyphItem.html#tymethod.glyph_string\" class=\"fn\">glyph_string</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pango/struct.GlyphString.html\" title=\"struct pango::GlyphString\">GlyphString</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.logical_widths\" class=\"method\"><a class=\"src rightside\" href=\"src/pango/glyph_item.rs.html#33-45\">source</a><h4 class=\"code-header\">pub fn <a href=\"pango/struct.GlyphItem.html#tymethod.logical_widths\" class=\"fn\">logical_widths</a>(&amp;self, text: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Given a <a href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\"><code>GlyphItem</code></a> and the corresponding text, determine the\nwidth corresponding to each character.</p>\n<p>When multiple characters compose a single cluster, the width of the\nentire cluster is divided equally among the characters.</p>\n<p>See also <a href=\"pango/struct.GlyphString.html#method.logical_widths\" title=\"method pango::GlyphString::logical_widths\"><code>GlyphString::logical_widths()</code></a>.</p>\n<h6 id=\"text\"><a class=\"doc-anchor\" href=\"#text\">§</a><code>text</code></h6>\n<p>text that @self corresponds to\n(glyph_item-&gt;item-&gt;offset is an offset from the\nstart of @text)</p>\n<h6 id=\"logical_widths\"><a class=\"doc-anchor\" href=\"#logical_widths\">§</a><code>logical_widths</code></h6>\n<p>an array whose length is the number of\ncharacters in glyph_item (equal to glyph_item-&gt;item-&gt;num_chars)\nto be filled in with the resulting character widths.</p>\n</div></details></div></details>",0,"pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasParamSpec-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><a href=\"#impl-HasParamSpec-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"glib/param_spec/trait.HasParamSpec.html\" title=\"trait glib::param_spec::HasParamSpec\">HasParamSpec</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.ParamSpec\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ParamSpec\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"glib/param_spec/trait.HasParamSpec.html#associatedtype.ParamSpec\" class=\"associatedtype\">ParamSpec</a> = <a class=\"struct\" href=\"glib/param_spec/struct.ParamSpecBoxed.html\" title=\"struct glib::param_spec::ParamSpecBoxed\">ParamSpecBoxed</a></h4></section><details class=\"toggle\" open><summary><section id=\"associatedtype.SetValue\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SetValue\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"glib/param_spec/trait.HasParamSpec.html#associatedtype.SetValue\" class=\"associatedtype\">SetValue</a> = <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h4></section></summary><div class='docblock'>Preferred value to be used as setter for the associated ParamSpec.</div></details><section id=\"associatedtype.BuilderFn\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.BuilderFn\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"glib/param_spec/trait.HasParamSpec.html#associatedtype.BuilderFn\" class=\"associatedtype\">BuilderFn</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.fn.html\">fn</a>(_: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"glib/param_spec/struct.ParamSpecBoxedBuilder.html\" title=\"struct glib::param_spec::ParamSpecBoxedBuilder\">ParamSpecBoxedBuilder</a>&lt;'_, <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a>&gt;</h4></section><section id=\"method.param_spec_builder\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><a href=\"#method.param_spec_builder\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"glib/param_spec/trait.HasParamSpec.html#tymethod.param_spec_builder\" class=\"fn\">param_spec_builder</a>() -&gt; Self::<a class=\"associatedtype\" href=\"glib/param_spec/trait.HasParamSpec.html#associatedtype.BuilderFn\" title=\"type glib::param_spec::HasParamSpec::BuilderFn\">BuilderFn</a></h4></section></div></details>","HasParamSpec","pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#impl-Hash-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#impl-Ord-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#856-858\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#877-879\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#902-905\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#impl-PartialEq-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#impl-PartialOrd-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1179\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1197\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1214\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1232\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","pango::auto::alias::LayoutRun"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StaticType-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><a href=\"#impl-StaticType-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"glib/types/trait.StaticType.html\" title=\"trait glib::types::StaticType\">StaticType</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.static_type\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#8-23\">source</a><a href=\"#method.static_type\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"glib/types/trait.StaticType.html#tymethod.static_type\" class=\"fn\">static_type</a>() -&gt; <a class=\"struct\" href=\"glib/types/struct.Type.html\" title=\"struct glib::types::Type\">Type</a></h4></section></summary><div class='docblock'>Returns the type identifier of <code>Self</code>.</div></details></div></details>","StaticType","pango::auto::alias::LayoutRun"],["<section id=\"impl-Eq-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#impl-Eq-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section>","Eq","pango::auto::alias::LayoutRun"],["<section id=\"impl-StructuralPartialEq-for-GlyphItem\" class=\"impl\"><a class=\"src rightside\" href=\"src/pango/auto/glyph_item.rs.html#15\">source</a><a href=\"#impl-StructuralPartialEq-for-GlyphItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"pango/struct.GlyphItem.html\" title=\"struct pango::GlyphItem\">GlyphItem</a></h3></section>","StructuralPartialEq","pango::auto::alias::LayoutRun"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()