<!--
                    void : sine	:  e c c o
                  plague : pool :  p e r s o n a
                    coma : beta :  s i g m a
                     #1a3acc #1ACCAB #ab1acc

                     /* colors */
						--brand-blue: #1A3ACC;
						--dark-blue: #001C9B;
						--very-dark-blue: #000E4E;
						--cool-blue: #E0E9FE;
						--magenta: #AB1ACC;
						--fuchsia: #84017E;
						--blood-red: #600000;
						--dim-red: #EE0202;
						--legacy: #008080;
						--java: #1ACCAB;
						--mint: #C0FFEA;
						--pale-blue: #A6AAF4;
						--robin: #A5C4DB;
						--golden: #CCAB1A;
						--burlywood: #DEB887;
						--safety-green: #BBFF32;
						--bright-green: #14E158;
						--mint-green: #2E8C5F;
						--pale-olive: #648476;
						--bright-orange: rgba(255, 111, 63, 0.5);
						--orange: #FF6F3F;
						--dark-olive: #1A1E1C;
						--black: #0A0C0E;
						--white: #FFFFFF;
						--base-bright: #F0F4F7;
						--bright-grey: #F2F2F2;
						--light-grey: #CFCFCF;
						--warm-grey: #818181;
						--metal: #5A6771;
						--discord: #292B2F;
						--ever-green: #142A2D;
						--deep-green: #0A202E;
						--warm-black: #2D2828;
						--deep-root: #004161;
						--euphoria: #00050F;
						--euphoria-bg: rgba(0, 5, 15, 1);
						--trans-black: rgba(0, 0, 0, 0.5);
						/* properties */
						--font-base-size: 14px;
						--font-small-size: 12px;
						--font-tiny-size: 10px;
						--font-micro-size: 8px;

                    /* urls */
						joeldom.github.io/redesign
						joeldom.github.io/style-guide
						joeldom.github.io/resume
						twitter.com/joeldombek
						instagram.com/joeld/
						dribbble.com/joeldombek
						ello.co/joeldombek
						twitch.tv/joeldombek

                            cmd

-->
<img class="img-responsive" src="https://joeldom.github.io/asset/images/styleguide-banner.png" style="margin: -1px 0 0 0">

The Redesign (<i>See [Style Guide](https://joeldom.github.io/style-guide/) components and layouts</i>) uses [Vue.js](https://vuejs.org/guide/introduction.html) to transform the user experience and interface, aligning with the brand's neo-industrial corporate persona. Objectives include dynamic interactivity, improved performance, and a modern UI reflecting structured grid-based designs combined with abstract art principles.

---

## Tao Todo App
[Repo - https://github.com/joeldom/tao-todo](https://github.com/joeldom/tao-todo)

[Ai Lovable Project workspace](https://lovable.dev/projects/936b5720-8dfb-4f2f-921f-595974160f09)

[Project Issue](https://github.com/joeldom/joeldom/issues/4)

---
### Concept: 
todo list that expands out into a scheduling app that also would be like a card deck of things to pull from to tell you or it to do.

### Ideas:
to dos you can do! 
or
to dos that can be done.
or
AI assistant task runner

### UI:
simple dark todo list. that also has a task running event for running logistics of "things" being done or set to happen

### Prompt:
`lets build a dark mode (dark black background, with X/twitter aesthetic like Next.js for elements on the same plane to not have visible borders unless the element has an interaction and components being outlines to distinguish for testing) todo list. i want to be able to arrange the items numerically and also drag and drop mostly exactly like how the steam wishlist works. i want an input that is the prime focus when keyboard inputs happen with ENTER submitting the todo. order the todo list in one column using flex-box that has new items added to the bottom oldest at the top but include a way to sort ascending/descending to flip this. there will also be several tags used for grouping tasks such as: money, chore, job, personal, fun, urgent, eventually, soon, default (applied by default, to find ones not classified). each todo once added need to be able to be edited. clicking on the name allows the user to edit but must click "save" to update the entry also being able to delete if -> edit is first clicked similar to how discord messages work. making the content into an input and tiny buttons with small contextual words to indicate for clarity. `

References:
[Steam Wishlist - sortable, content rich](https://store.steampowered.com/wishlist/id/hidden_method/)

## Redesign + Vue.js

Objectives:

- Enhance UX: Intuitive and engaging interface.
- Modern UI: Fresh design with brand-aligned aesthetics.
- Performance: Fast, responsive, smooth application.
- Scalability: Architecture for future expansions.
- Maintainability: Easy-to-update codebase with Vue.js components.

Key Features:

- Dynamic Interactivity: Vue.js-powered interfaces.
- Responsive Design: Seamless experience on all devices.
- Structured & Abstract Design: Grid-based with asymmetry and large color areas.
- User-Centric: Incorporates user feedback, guided by philosophy and Tao/Dao principles.

<hr>

## Writing Section

**Non-Fiction**

- Ego of Art - Book

**Fiction**

- From Beyond

<hr>


## Product Grid Item - Nike
Organizational pattern that allows for the distinguishing of more important items from one another while listing key details. 
```html
<div class="product-card product-grid__card  css-1t0asop" data-product-position="14" data-testid="product-card">
	<div class="product-card__body" data-el-type="Card" data-testid="product-card__body">
		<figure>
			<a class="product-card__link-overlay" data-testid="product-card__link-overlay" href="https://www.nike.com/t/sportswear-phoenix-fleece-womens-over-oversized-pullover-hoodie-Kqx9H3/DQ5858-634" tabindex="-1">Nike Sportswear Phoenix Fleece</a>
			<a aria-label="Nike Sportswear Phoenix Fleece" class="product-card__img-link-overlay" data-el-type="Hero" data-testid="product-card__img-link-overlay" href="https://www.nike.com/t/sportswear-phoenix-fleece-womens-over-oversized-pullover-hoodie-Kqx9H3/DQ5858-634">
				<div class="wall-image-loader  css-1la3v4n" data-testid="wall-image-loader">
					<img alt="Nike Sportswear Phoenix Fleece Women's Over-Oversized Pullover Hoodie" class="product-card__hero-image css-1fxh5tw" height="100%" loading="lazy" sizes="" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ece3696b-09fa-4326-bf4e-25bec29c0fed/sportswear-phoenix-fleece-womens-over-oversized-pullover-hoodie-Kqx9H3.png" width="100%">
					<noscript>
						<img alt="Nike Sportswear Phoenix Fleece Women&#x27;s Over-Oversized Pullover Hoodie" class="product-card__hero-image css-1fxh5tw" height="400" loading="lazy" width="400"/>
					</noscript>
				</div>
			</a>
			<div class="product-card__info disable-animations for--product">
				<div class="">
					<div data-testid="product-card__messaging" class="product-card__messaging accent--color">Just In</div>
					<div class="product-card__titles">
						<div class="product-card__title" id="Nike Sportswear Phoenix Fleece" role="link">Nike Sportswear Phoenix Fleece</div>
						<div class="product-card__subtitle" role="link">Women's Over-Oversized Pullover Hoodie</div>
					</div>
				</div>
				<div class="product-card__count-wrapper false false" data-testid="product-card__count-wrapper ">
					<div class="product-card__count-item">
						<button aria-disabled="true" class="product-card__colorway-btn" data-testid="product-card__colorway-btn" type="button">
							<div aria-label="Available in 4 Colors" class="product-card__product-count">4 Colors</div>
						</button>
					</div>
				</div>
				<div class="product-card__animation_wrapper">
					<div class="product-card__price-wrapper">
						<div class="product-card__price" data-testid="product-card__price" role="link">
							<div class="product-price__wrapper css-9xqpgk">
								<div class="product-price us__styling is--current-price css-11s12ax" data-testid="product-price">$75</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</figure>
	</div>
</div>
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
<hr>


## Color


| Scope                | Color                                            | HEX     | RGB                |
| -------------------- | ------------------------------------------------ | ------- | ------------------ |
| Background           | ![#282c34](https://fakeimg.pl/35/282c34/?text=+) | #282c34 | rgb(40, 44, 52)    |
| Foreground           | ![#abb2bf](https://fakeimg.pl/35/abb2bf/?text=+) | #abb2bf | rgb(171, 178, 191) |
| Comment              | ![#636d83](https://fakeimg.pl/35/636d83/?text=+) | #636d83 | rgb(99, 109, 131)  |
| Keyword              | ![#10b1fe](https://fakeimg.pl/35/10b1fe/?text=+) | #10b1fe | rgb(16, 177, 254)  |
| Function/Method      | ![#3fc56b](https://fakeimg.pl/35/3fc56b/?text=+) | #3fc56b | rgb(63, 197, 107)  |
| Property             | ![#ce9887](https://fakeimg.pl/35/ce9887/?text=+) | #ce9887 | rgb(206, 152, 135) |
| String               | ![#f9c859](https://fakeimg.pl/35/f9c859/?text=+) | #f9c859 | rgb(249, 200, 89)  |
| Number               | ![#ff78f8](https://fakeimg.pl/35/ff78f8/?text=+) | #ff78f8 | rgb(255, 120, 248) |
| Constant             | ![#9f7efe](https://fakeimg.pl/35/9f7efe/?text=+) | #9f7efe | rgb(159, 126, 254) |
| Markup Tag           | ![#3691ff](https://fakeimg.pl/35/3691ff/?text=+) | #3691ff | rgb(54, 145, 255)  |
| Markup Attribute     | ![#ff936a](https://fakeimg.pl/35/ff936a/?text=+) | #ff936a | rgb(255, 147, 106) |
| Class/Type/Interface | ![#ff6480](https://fakeimg.pl/35/ff6480/?text=+) | #ff6480 | rgb(255, 100, 128) |
| Operator/Punctuation | ![#7a82da](https://fakeimg.pl/35/7a82da/?text=+) | #7a82da | rgb(122, 130, 218) |


<article>
	<span style="color:#1a3acc;background-color:#1a3acc;width:20px;display:inline-block;" title="#1a3acc">&nbsp;&squ;</span>
	<span style="color:#e0e9fe;background-color:#e0e9fe;width:20px;display:inline-block;" title="#e0e9fe">&nbsp;&squ;</span>
	<span style="color:#e4dfd9;background-color:#e4dfd9;width:20px;display:inline-block;" title="#e4dfd9">&nbsp;&squ;</span>
	<span style="color:#a3a3a3;background-color:#a3a3a3;width:20px;display:inline-block;" title="#a3a3a3">&nbsp;&squ;</span>
	<span style="color:#e4dfd9;background-color:#e4dfd9;width:20px;display:inline-block;" title="#e4dfd9">&nbsp;&squ;</span>
	<span style="color:#ab1acc;background-color:#ab1acc;width:20px;display:inline-block;" title="#ab1acc">&nbsp;&squ;</span>
	<span style="color:#84017E;background-color:#84017E;width:20px;display:inline-block;" title="#84017E">&nbsp;&squ;</span>
	<span style="color:#600000;background-color:#600000;width:20px;display:inline-block;" title="#600000">&nbsp;&squ;</span>
	<span style="color:#690808;background-color:#690808;width:20px;display:inline-block;" title="#690808">&nbsp;&squ;</span>
	<span style="color:#008080;background-color:#008080;width:20px;display:inline-block;" title="#008080">&nbsp;&squ;</span>
	<span style="color:#1ACCAB;background-color:#1ACCAB;width:20px;display:inline-block;" title="#1ACCAB">&nbsp;&squ;</span>
	<span style="color:#a6aaf4;background-color:#a6aaf4;width:20px;display:inline-block;" title="#a6aaf4">&nbsp;&squ;</span>
	<span style="color:#142a2d;background-color:#142a2d;width:20px;display:inline-block;" title="#142a2d">&nbsp;&squ;</span>
	<span style="color:#142a2d;background-color:#142a2d;width:20px;display:inline-block;" title="#142a2d">&nbsp;&squ;</span>
	<span style="color:#1A1E1C;background-color:#1A1E1C;width:20px;display:inline-block;" title="#1A1E1C">&nbsp;&squ;</span>
	<span style="color:#CCAB1A;background-color:#CCAB1A;width:20px;display:inline-block;" title="#CCAB1A">&nbsp;&squ;</span>
	<span style="color:#CCAB1A;background-color:#CCAB1A;width:20px;display:inline-block;" title="#CCAB1A">&nbsp;&squ;</span>
	<span style="color:#DEB887;background-color:#DEB887;width:20px;display:inline-block;" title="#DEB887">&nbsp;&squ;</span>
	<span style="color:#BBFF32;background-color:#BBFF32;width:20px;display:inline-block;" title="#BBFF32">&nbsp;&squ;</span>
	<span style="color:#14E158;background-color:#14E158;width:20px;display:inline-block;" title="#14E158">&nbsp;&squ;</span>
	<span style="color:#2e8c5f;background-color:#2e8c5f;width:20px;display:inline-block;" title="#2e8c5f">&nbsp;&squ;</span>
	<span style="color:#648476;background-color:#648476;width:20px;display:inline-block;" title="#648476">&nbsp;&squ;</span>
	<span style="color:#F0F4F7;background-color:#F0F4F7;width:20px;display:inline-block;" title="#F0F4F7">&nbsp;&squ;</span>
	<span style="color:#F7F2FB;background-color:#F7F2FB;width:20px;display:inline-block;" title="#F7F2FB">&nbsp;&squ;</span>
	<span style="color:#5A6771;background-color:#5A6771;width:20px;display:inline-block;" title="#5A6771">&nbsp;&squ;</span>
	<span style="color:#767676;background-color:#767676;width:20px;display:inline-block;" title="#767676">&nbsp;&squ;</span>
	<span style="color:#C4C4C4;background-color:#C4C4C4;width:20px;display:inline-block;" title="#C4C4C4">&nbsp;&squ;</span>
	<span style="color:#2D2828;background-color:#2D2828;width:20px;display:inline-block;" title="#2D2828">&nbsp;&squ;</span>
	<span style="color:#0A202E;background-color:#0A202E;width:20px;display:inline-block;" title="#0A202E">&nbsp;&squ;</span>
	<span style="color:#004161;background-color:#004161;width:20px;display:inline-block;" title="#004161">&nbsp;&squ;</span>
</article>

<hr>

<img style="padding:1em;background:transparent
;display:inline-block;" alt="JD Chip Logo" width="100px" src="https://joeldom.github.io/asset/chip-logo.png"/>&nbsp;<img style="padding:1em;background:transparent
;display:inline-block;" alt="Vue.js" width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/120px-Vue.js_Logo_2.svg.png"/>
<img style="padding:1em;background:pink
;display:inline-block;" alt="GAINAX" width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/GAINAX.svg/1280px-GAINAX.svg.png"/>


---

### Copy / Paste

Time slots

```js
1:00
2:00
3:00
4:00
5:00
6:00
7:00
8:00
9:00
10:00
11:00
12:00
```

---
