import Image from "next/image";
import transparentFig from "../../public/transparent-cover-sample.png";
import squareFig from "../../public/june-light.png";

export default function TestProse() {
	return (
		<>
			<p>
				Many say exploration is part of our destiny, but it’s actually
				our duty to future generations and their quest to ensure the
				survival of the human species.
			</p>
			<p>
				It suddenly struck me that that tiny pea, pretty and blue, was
				the Earth. I put up my thumb and shut one eye, and my thumb
				blotted out the planet Earth. I didn”t feel like a giant. I felt
				very, very small.
			</p>
			<figure className="mb-16">
				<div className="next-figure-container">
					<Image
						src={transparentFig}
						layout="fill"
						objectFit={"contain"}
						objectPosition={"bottom"}
						placeholder="blur"
						alt="Title"
					/>
				</div>
			</figure>
			<h3>Heading 3 &lt;h3&gt;</h3>
			<p>
				The Earth was small, light blue, and so touchingly alone, our
				home that must be defended like a holy relic. The Earth was
				absolutely round. I believe I never knew what the word round
				meant until I saw Earth from space.
			</p>

			<figure>
				<div className="next-figure-container">
					<Image
						src={squareFig}
						layout="fill"
						objectFit={"contain"}
						placeholder="blur"
						alt="Title"
					/>
				</div>
				<figcaption>Something interesting about this image</figcaption>
			</figure>
			<h4>Heading 4 &lt;h4&gt;</h4>
			<p>
				To be the first to enter the cosmos, to engage, single-handed,
				in an unprecedented duel with nature—could one dream of anything
				more?
			</p>
			<h5>Heading 5 &lt;h5&gt;</h5>
			<p>
				What was most significant about the lunar voyage was not that
				man set foot on the Moon but that they set eye on the earth.
			</p>
			<h6>Heading 6 &lt;h6&gt;</h6>
			<p>
				Many say exploration is part of our destiny, but it’s actually
				our duty to future generations and their quest to ensure the
				survival of the human species.
			</p>
			<hr />
			<h2>Block-level elements</h2>
			<p>
				Here’s a paragraph &lt;p&gt; filled with some{" "}
				<a href="http://spaceipsum.com/">Space Ipsum</a>. Never in all
				their history have men been able truly to conceive of the world
				as one: a single sphere, a globe, having the qualities of a
				globe, a round earth in which all the directions eventually
				meet, in which there is no center because every point, or none,
				is center — an equal earth which all men occupy as equals. The
				airman’s earth, if free men make it, will be truly round: a
				globe in practice, not in theory.
			</p>
			<p>
				There can be no thought of finishing for ‘aiming for the stars.’
				Both figuratively and literally, it is a task to occupy the
				generations. And no matter how much progress one makes, there is
				always the thrill of just beginning.
			</p>
			<div>
				Here’s a div &lt;div&gt;. A Chinese tale tells of some men sent
				to harm a young girl who, upon seeing her beauty, become her
				protectors rather than her violators. That’s how I felt seeing
				the Earth for the first time. I could not help but love and
				cherish her
			</div>
			<article>
				<h3>This is an article &lt;article&gt; with a paragraph</h3>
				<p>
					We want to explore. We’re curious people. Look back over
					history, people have put their lives at stake to go out and
					explore … We believe in what we’re doing. Now it’s time to
					go.
				</p>
				<p>End of the article.</p>
			</article>
			<blockquote>
				<p>
					Let’s light this fire one more time, Mike, and witness this
					great nation at its best. &lt;blockquote&gt; via{" "}
					<a href="http://spaceipsum.com/">Space Ipsum</a>
				</p>
			</blockquote>
			<p>
				We choose to go to the moon in this decade and do the other
				things, not because they are easy, but because they are hard,
				because that goal will serve to organize and measure the best of
				our energies and skills, because that challenge is one that we
				are willing to accept, one we are unwilling to postpone, and one
				which we intend to win.
			</p>
			<pre>
				* {"{"}
				{"\n"}
				{"\t"}font-family: "Comic Sans MS", "Comic Sans", "Marker Felt"
				!important;
				{"\n"}
				{"}"}
				{"\n"}&lt;pre&gt;{"\n"}
			</pre>
			<p>
				Many say exploration is part of our destiny, but it’s actually
				our duty to future generations and their quest to ensure the
				survival of the human species.
			</p>
			<address>
				<strong>Sherlock Holmes</strong>
				<br />
				221B Baker Street
				<br />
				London, United Kingdom &lt;address&gt;
			</address>
			<hr />
			<h2>Lists &lt;li&gt;</h2>
			<p>
				The regret on our side is, they used to say years ago, we are
				reading about you in science class. Now they say, we are reading
				about you in history class.
			</p>
			<ul>
				<li>Unordered list &lt;ul&gt;</li>
				<li>List element</li>
				<li>Across the sea of space, the stars are other suns.</li>
				<li>
					Science cuts two ways, of course; its products can be used
					for both good and evil. But there’s no turning back from
					science. The early warnings about technological dangers also
					come from science.
				</li>
			</ul>
			<p>
				It suddenly struck me that that tiny pea, pretty and blue, was
				the Earth. I put up my thumb and shut one eye, and my thumb
				blotted out the planet Earth. I didn”t feel like a giant. I felt
				very, very small.
			</p>
			<ol>
				<li>Ordered list &lt;ol&gt;</li>
				<li>List element</li>
				<li>
					The dreams of yesterday are the hopes of today and the
					reality of tomorrow.
				</li>
				<li>
					Curious that we spend more time congratulating people who
					have succeeded than encouraging people who have not.
				</li>
			</ol>
			<p>
				For those who have seen the Earth from space, and for the
				hundreds and perhaps thousands more who will, the experience
				most certainly changes your perspective. The things that we
				share in our world are far more valuable than those which divide
				us.
			</p>
			<dl>
				<dt>Definition term &lt;dt&gt;</dt>
				<dd>Definition &lt;dd&gt;</dd>
				<dt>Earth</dt>
				<dd>A kick-ass planet.</dd>
				<dt>Pluto</dt>
				<dd>A kick-ass former planet.</dd>
				<dt>Space Ipsum</dt>
				<dd>
					NASA is not about the ‘Adventure of Human Space
					Exploration’…We won’t be doing it just to get out there in
					space – we’ll be doing it because the things we learn out
					there will be making life better for a lot of people who
					won’t be able to go.
				</dd>
			</dl>
			<p>
				Spaceflights cannot be stopped. This is not the work of any one
				man or even a group of men. It is a historical process which
				mankind is carrying out in accordance with the natural laws of
				human development.
			</p>
			<hr />
			<h2>Text-level elements</h2>
			<ul>
				<li>
					<a href="#">anchor link</a> &lt;a&gt;
				</li>
				<li>
					abbreviation: <abbr title="'Syntactically">SASS</abbr>{" "}
					&lt;abbr&gt;
				</li>
				<li>
					citation: <cite>A Study in Scarlet</cite> &lt;cite&gt;
				</li>
				<li>
					Here’s the <code>&lt;code&gt;</code> element
				</li>
				<li>
					deleted text: <del>Episodes I, II, III</del> &lt;del&gt;
				</li>
				<li>
					definition: The <dfn>definition element</dfn> is the element
					being defined inline. &lt;dfn&gt;
				</li>
				<li>
					<em>emphasis</em> &lt;em&gt;
				</li>
				<li>
					<ins>inserted text</ins> &lt;ins&gt;
				</li>
				<li>
					keyboard input: <kbd>control + space</kbd> &lt;kbd&gt;
				</li>
				<li>
					<mark>mark element</mark> &lt;mark&gt;
				</li>
				<li>
					meter:{" "}
					<meter value={423} min={200} max={500}>
						awesomeness
					</meter>{" "}
					&lt;meter&gt;
				</li>
				<li>
					progress:{" "}
					<progress value={90} max={100}>
						70 %
					</progress>{" "}
					&lt;progress&gt;
				</li>
				<li>
					quotation (short): <q>You just gotta believe!</q> &lt;q&gt;
				</li>
				<li>
					quotation within a quotation (short):{" "}
					<q>
						Yo dawg, I heard you like quotes so I put{" "}
						<q>this quote</q> within this quote.
					</q>{" "}
					&lt;q&gt;
				</li>
				<li>
					strikethough: <s>Lance Armstrong remains steroid-free.</s>{" "}
					&lt;s&gt;
				</li>
				<li>
					sample text: <samp>Error</samp> &lt;samp&gt;
				</li>
				<li>
					small: <small>Hydrogen</small> &lt;small&gt;
				</li>
				<li>
					small within small:{" "}
					<small>
						Hydrogen <small>Hydrogen</small>
					</small>{" "}
					&lt;small&gt;
				</li>
				<li>
					strong: <strong>The Hammer</strong> &lt;strong&gt;
				</li>
				<li>
					subscript: <sub>Lower</sub> 0
					<sub>
						1
						<sub>
							2<sub>3</sub>
						</sub>
					</sub>{" "}
					&lt;sub&gt;
				</li>
				<li>
					superscript: I need a good <sup>superman</sup> joke to go
					here. 0
					<sup>
						1
						<sup>
							2<sup>3</sup>
						</sup>
					</sup>{" "}
					&lt;sup&gt;
				</li>
				<li>
					time: <time dateTime="1985-12-09 19:00">Dec 9</time>{" "}
					&lt;time&gt;
				</li>
				<li>
					underline: Never underline <u>anything</u>. &lt;u&gt;
				</li>
				<li>
					variable: <var>cat</var> + <var>dog</var> ={" "}
					<var>catdog</var> &lt;var&gt;
				</li>
			</ul>
		</>
	);
}
