import { html } from 'lit'
import '../../src/container/container.js'
import '../../src/content/content.js'

const meta = {
  title: 'Examples/Trevor Eyre',
}

const BlogPost = {
  name: 'Blog post',
  render: () => html`
    <slate-container size="md">
      <slate-content>
        <h1>Vue JSX for the React developer</h1>
        <p>
          Here’s a little cheat-sheet for how to use JSX in Vue. JSX is less
          popular in Vue than React, because Vue already has a very good, easy
          to learn HTML templating system. However, I found myself reaching for
          JSX more often due to the increased flexibility. For example, I’m a
          very big fan of adding an
          <code>as</code>
          prop to my components, to easily change the HTML tag or component that
          gets rendered.
        </p>
        <pre
          class="language-html"
        ><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppButton</span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>	Button Link<br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppButton</span><span class="token punctuation">&gt;</span></span></code></pre>
        <p>
          I found myself using a lot of render functions for this sort of
          functionality. And once you’re using render functions, JSX is MUCH
          easier to use than stringing together a bunch of
          <code>createElement</code>
          functions.
        </p>
        <h2>Props and attributes</h2>
        <p>
          Props can be accessed via
          <code>this.$props</code>
          . All additional attributes passed to the component are available via
          <code>this.$attrs</code>
          , and are automatically added to the root component.
        </p>
        <pre
          class="language-javascript"
        ><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><br>	name<span class="token operator">:</span> <span class="token string">'AppButton'</span><span class="token punctuation">,</span><br>	props<span class="token operator">:</span> <span class="token punctuation">{</span><br>		size<span class="token operator">:</span> String<span class="token punctuation">,</span><br>	<span class="token punctuation">}</span><span class="token punctuation">,</span><br><br>	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>		<span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<br><br>		<span class="token keyword">return</span> <span class="token punctuation">(</span><br>			<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span><span class="token operator">&gt;</span><br>				<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">}</span><br>			<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><br>		<span class="token punctuation">)</span><br>	<span class="token punctuation">}</span><span class="token punctuation">,</span><br><span class="token punctuation">}</span></code></pre>
        <pre
          class="language-html"
        ><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>	Submit<br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppButton</span><span class="token punctuation">&gt;</span></span><br><br><span class="token comment">&lt;!-- Result --&gt;</span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>	Submit<br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
        <p>
          If you want to manually handle how extra attributes are passed to the
          DOM, you can add
          <code>inheritAttrs: false</code>
          to your component. You might do this if you want those attributes to
          pass to a nested element instead of the root, for example. The one
          exception is
          <code>class</code>
          and
          <code>style</code>
          , which are always automatically merged with the root element,
          regardless of
          <code>inheritAttrs</code>
          .
        </p>
        <pre
          class="language-javascript"
        ><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><br>  name<span class="token operator">:</span> <span class="token string">'AppButton'</span><span class="token punctuation">,</span><br>  inheritAttrs<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><br>  props<span class="token operator">:</span> <span class="token punctuation">{</span><br>    size<span class="token operator">:</span> String<span class="token punctuation">,</span><br>  <span class="token punctuation">}</span><span class="token punctuation">,</span><br><br>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>    <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<br><br>    <span class="token keyword">return</span> <span class="token punctuation">(</span><br>      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"root"</span><span class="token operator">&gt;</span><br>        <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span> attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">}</span><span class="token operator">&gt;</span><br>          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">}</span><br>        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><br>      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><br>    <span class="token punctuation">)</span><br>  <span class="token punctuation">}</span><span class="token punctuation">,</span><br><span class="token punctuation">}</span></code></pre>
        <pre
          class="language-html"
        ><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppButton</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-button<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>	Submit<br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppButton</span><span class="token punctuation">&gt;</span></span><br><br><span class="token comment">&lt;!-- Result --&gt;</span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root my-button<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>		Submit<br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
        <h2>Event handlers</h2>
        <pre
          class="language-javascript"
        ><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><br>  name<span class="token operator">:</span> <span class="token string">'AppButton'</span><span class="token punctuation">,</span><br><br>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>    <span class="token keyword">return</span> <span class="token punctuation">(</span><br>      <span class="token operator">&lt;</span>button <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">{</span> on<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$listeners <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><br>        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">}</span><br>      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><br>    <span class="token punctuation">)</span><br>  <span class="token punctuation">}</span><span class="token punctuation">,</span><br><span class="token punctuation">}</span></code></pre>
        <h2>Links</h2>
        <p>babel-plugin-transform-vue-jsx</p>
        <p>Spreading props, attributes, listeners</p>
      </slate-content>
    </slate-container>
  `,
}

export default meta
export { BlogPost }
