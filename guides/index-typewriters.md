# What is an index typewriter?

An index typewriter is a writing machine where you first choose a character by moving a pointer, dial, stylus or lever over a chart of characters (the "index"), and then make one print stroke to put it on the paper. It does the job of a keyboard typewriter with far fewer parts, which made it cheaper, smaller and simpler, but also much slower to write with.

All counts in this guide are over this library: the 90 index machines listed in [Index machines](../views/index-machines.md) (facts from Dingwerth's *Lexikon*) and the roughly 1,900 patents that were read and summarised. They are not a census of everything ever made. The patent summaries were made by machine from OCR text, so a detail can be wrong; follow the link and check the patent's drawings before relying on it.

## Index machine or keyboard machine?

On a keyboard typewriter each character has its own key. Pressing the key does two jobs at once: it chooses the character and it prints it. A typebar machine with 84 characters needs dozens of keys, levers and typebars, all adjusted to land on the same spot.

An index machine splits those two jobs:

1. **Select.** You bring the wanted character to the printing point by aiming at it on a chart. Usually this turns or slides a single type carrier, such as a wheel, cylinder or plate, that holds every character.
2. **Print.** You make one stroke, with a print key, a lever, or by pressing the pointer itself, and the chosen type meets the paper. On most machines the same stroke also moves the paper on by one space.

Because there is only one type carrier and one print action, an index machine can be built from a handful of parts. The cost is speed: your eye has to find each letter on the chart and your hand has to travel to it. That is the main reason they never replaced keyboard machines in offices.

The line between the two is not always sharp. Some machines have a small set of keys that only *set* the type wheel, followed by a separate print stroke (see [Small key sets](#small-key-sets-that-only-set-the-element) below), and the Lexikon classifies some machines that look like index machines, such as the Odell and the Hall, as single-key machines. This guide follows the library's classification. Where it says a patent is "linked" to a machine, the link is usually an inference from the inventor's name; only a few (such as the Mignon and Gerda patents) are confirmed or high confidence.

## Why were they made?

**Price.** This was the biggest reason. The keyboard [Hammond 1](../machines/hammond-1.md) of 1884 cost about 100 dollars. Index machines of the same years sold for a fraction of that:

| Machine | Year | Type carrier | Price given in the Lexikon |
|---|---|---|---|
| [Dollar Typewriter](../machines/dollar-typewriter.md) | 1890 | type wheel | 1 dollar |
| [Simplex Type Writer](../machines/simplex-type-writer.md) | 1892 | type disc | 2.50 dollars |
| [American Index](../machines/american-index.md) | 1893 | type ring | 5 dollars |
| [World 1](../machines/world-1.md) | 1886 | type plate | 8 dollars |
| [Crown Index 1](../machines/crown-index-1.md) | 1888 | type wheel | 20 dollars |
| [Columbia Index 1](../machines/columbia-index-1.md) | 1884 | type wheel | 25 dollars |
| [Mignon 2](../machines/mignon-2.md) | 1904 | type cylinder | 100 marks |

Many patents state this aim outright: the American Index patent, [US510214](../patents/US510214.md), asks for a small, portable, low-priced machine that still does first-class work.

**Simplicity and size.** Fewer parts meant a lighter, smaller machine. The library's feature [FRM:few-parts](../features/frm-few-parts.md) is among the commonest in the read patents for index machines, and [FRM:compact-portable](../features/frm-compact-portable.md) is common too. Several machines were sold as pocket or travel machines, for example the [Taurus Type](../machines/taurus-type.md) (1908) and the French [Virotyp (B)](../machines/virotyp-b.md) (1914).

**Toys and teaching.** About twenty of the Lexikon's index machines are described as toy or children's machines, from the [Herrington](../machines/herrington.md) (1885) and the Simplex family to German machines such as the [Famos](../machines/famos.md) (1910) and the American [Dial De Luxe](../machines/dial-de-luxe.md) (1934) by Louis Marx. The feature [USE:toy](../features/use-toy.md) collects the patents that say so; its earliest card is a crank-turned type wheel, [US175661](../patents/US175661.md) (1876).

**Huge character sets.** An index is the obvious way to choose among thousands of characters, which no keyboard can hold. The Lexikon lists index machines for Chinese and Japanese, such as [Chinese (A)](../machines/chinese-a.md) (1899, about 4,000 characters on a huge wheel), the [Nippon](../machines/nippon.md) (1917) and the [Shimada](../machines/shimada.md) (1938), each with two to four thousand characters.

## How you choose a character

The library sorts selection methods into features. The table shows how many read patents for index-type machines show each (a patent can show several).

| Method | Feature | Index-type patents | Oldest card in the library |
|---|---|---|---|
| Pointer moved over a flat chart | [SEL:pointer-chart](../features/sel-pointer-chart.md) | 43 | 1829, [USX5581](../patents/USX5581.md) |
| Pointer dropped into a hole or notch | [SEL:pointer-hole](../features/sel-pointer-hole.md) | 21 | 1852, [US8980](../patents/US8980.md) |
| Dial or knob turned to the character | [SEL:dial](../features/sel-dial.md) | 20 | 1856, [US14907](../patents/US14907.md) |
| Arm swung over an arc | [SEL:arc-arm](../features/sel-arc-arm.md) | 19 | 1876, [US175584](../patents/US175584.md) |
| Slider along a straight index | [SEL:linear-slider](../features/sel-linear-slider.md) | 14 | 1850, [US7771](../patents/US7771.md) |
| Type wheel turned directly by hand | [SEL:index-wheel](../features/sel-index-wheel.md) | 14 | 1843, [US3228](../patents/US3228.md) |
| Stylus touched to a plate | [SEL:stylus-plate](../features/sel-stylus-plate.md) | 0 (4 in all) | 1884, [US292854](../patents/US292854.md) |

Almost every method also needs a way to hold the chosen position firmly while printing, so the letter lands in line. That is [SEL:selector-locking](../features/sel-selector-locking.md), the commonest selection feature of all among index-type patents (53).

### Chart and pointer

The classic arrangement: a printed chart of characters, and a pointer you slide over it. The pointer is geared or linked to the type carrier, so wherever it points, the matching type faces the paper. Then you press a print key, or press the pointer itself ([SEL:pointer-press-prints](../features/sel-pointer-press-prints.md)).

- The oldest card in the library is William Burt's 1829 "Typographer", [USX5581](../patents/USX5581.md): a lever moves a type segment over an index, and an impression lever prints and advances the paper. The Lexikon lists his machine as the [Burt](../machines/burt.md).
- Byron Brooks's [US463723](../patents/US463723.md) (1891) describes a pointer on a letter plate that turns a multi-row type wheel by rack and pinion; pressing the pointer swings the frame down to print. It is linked by inventor name to the [Crown Index 1](../machines/crown-index-1.md).
- Louis Sell's [DE149308](../patents/DE149308.md) is confirmed as the basis of the [Mignon 1](../machines/mignon-1.md) (1902). One handle sets a pointer over a checkerboard chart and, pressed down, prints from a type cylinder; a linkage enlarges the pointer's travel so the chart can be bigger and easier to read.
- Georg Emig's [DE393929](../patents/DE393929.md), linked to the [Gerda 2](../machines/gerda-2.md) (1921), puts the pointer and character plate directly above the type wheel, with characters in three arc-shaped rows, to avoid the play of a long linkage.

### Dial or wheel turned by hand

Instead of a flat chart, the characters sit round a dial and you twist a knob or handle. In the simplest machines there is no separate dial at all: the type wheel carries a ring of character marks and you turn the wheel itself ([SEL:index-wheel](../features/sel-index-wheel.md)).

- Robert Ingersoll's [US478109](../patents/US478109.md) (1892), linked to the [Dollar Typewriter](../machines/dollar-typewriter.md), turns a small type wheel by a thumb button; pressing down locks a notch on a pin, prints through a slot, and steps the carriage.
- Charles Spiro's [US352160](../patents/US352160.md) (1886), linked to the [Columbia Index 1](../machines/columbia-index-1.md) and [Columbia Index 2](../machines/columbia-index-2.md), uses a twirling handle with an index finger over a fixed dial, and two stacked wheels for small letters and capitals.
- In a common variant the pointer drops into a hole or notch beside each character, which both shows the choice and locks the carrier ([SEL:pointer-hole](../features/sel-pointer-hole.md)). Adolphe Eggis's [US380792](../patents/US380792.md) (1888), linked to the Swiss [Velograph 2](../machines/velograph-2.md), works this way.

### Stylus in a plate

Here a pen-like stylus is touched to a field of characters, and its movement steers the type. Henry Richardson's [US292854](../patents/US292854.md) (1884) moves a tilting type block under a hammer by a stylus on a gimbal; wider holes for wide letters let the stylus go deeper and give a longer space. Later German examples are Paul Muchajer's "stylus typewriter with type wheel", [DE386555](../patents/DE386555.md) (1923), from the maker of [Die kleine Gundka](../machines/die-kleine-gundka.md), and [DE577948](../patents/DE577948.md) (1933), where a ball-tipped arm sets a type wheel through a rack.

### Sliding index

The chart is a straight row, and you slide a pointer, or the whole printing head, along it.

- Robert Morris's [US355703](../patents/US355703.md) (1885), linked to the [Morris](../machines/morris.md), slides a plate with rubber type underneath and a matching index on top until a fixed pointer sits over the wanted character.
- Halbert Payne's [US1121284](../patents/US1121284.md) (1914) slides a flexible type band behind an index that runs over a plate laid out like a standard keyboard.

### Arc arm

A lever pivots at one end and its tip sweeps an arc or semicircle of characters, often with notches to stop in. Carl McKinley's [US232741](../patents/US232741.md) (1880) swings one lever over a notched sector to turn a multi-row wheel, then presses down to fire a hammer. The [American Index](../machines/american-index.md) patent [US510214](../patents/US510214.md) has you put a finger in the cup of a pointer and swing a rubber type segment to the radial line of the character, then press a separate print lever.

### Small key sets that only set the element

Some machines have keys, but the keys only move the type carrier into position; printing is a separate common stroke ([SEL:dummy-keyboard](../features/sel-dummy-keyboard.md)). John Pratt's [US81000](../patents/US81000.md) (1868) uses key levers that push a single type plate up, down and sideways by set amounts, with a hammer striking at one fixed point. The German [DE34986](../patents/DE34986.md) (1886) uses two small groups of keys, one to choose the row on a type roller and one to choose the character, so the number of characters is about the product of the two key counts. These sit halfway between index and keyboard machines.

## The type carriers

Every index machine has one carrier holding all its type. In the Lexikon's 90 index machines the type wheel is by far the commonest.

| Carrier | Index machines | What it is | Example |
|---|---|---|---|
| Type wheel | 39 | Types round the rim of a wheel ([ELEM:wheel-rim](../features/elem-wheel-rim.md)) | [Crown Index 1](../machines/crown-index-1.md), [Dollar Typewriter](../machines/dollar-typewriter.md) |
| Type disc | 14 | Types on the flat face of a disc ([ELEM:disc-face](../features/elem-disc-face.md)) | [Velograph 2](../machines/velograph-2.md), [Simplex Type Writer](../machines/simplex-type-writer.md) |
| Type cylinder | 8 | A drum with several rows along its length ([ELEM:cylinder-multirow](../features/elem-cylinder-multirow.md)) | [Mignon 1](../machines/mignon-1.md), [Tip-Tip](../machines/tip-tip.md) |
| Type plate | 7 | A flat plate or grid of types ([ELEM:plate-flat](../features/elem-plate-flat.md)) | [World 1](../machines/world-1.md), [Morris](../machines/morris.md) |
| Type ring | 3 | Types on a ring or curved segment ([ELEM:ring](../features/elem-ring.md), [ELEM:sector-segment](../features/elem-sector-segment.md)) | [American Index](../machines/american-index.md) |
| Linear type rule | 2 | Types along a straight bar ([ELEM:linear-bar](../features/elem-linear-bar.md)) | [Westphalia](../machines/westphalia.md) |
| Type band | 2 | A flexible strip of type ([ELEM:band](../features/elem-band.md)) | [La Parisienne](../machines/la-parisienne.md), [Coffman](../machines/coffman.md) |
| Individual type | 4 | Separate type pieces picked one at a time ([ELEM:individual-slugs](../features/elem-individual-slugs.md)) | [Karli 1 Einreihig](../machines/karli-1-einreihig.md), [Chinese (B)](../machines/chinese-b.md) |

The rest of the 90 are listed with unknown or unusual carriers.

**Rubber type** ([ELEM:rubber-type](../features/elem-rubber-type.md)) deserves a mention of its own: 23 of the read index-type patents show it, nearly all from the 1880s and 1890s. The Morris plate, the American Index segment and the swappable type band of [US369401](../patents/US369401.md) (linked by inventor name to La Parisienne) are all rubber.

**Changing the type.** With the whole alphabet on one part, many makers let you swap it for another font or language ([ELEM:interchangeable](../features/elem-interchangeable.md)).

**Exact alignment.** A wheel that is a hair off gives a crooked letter, so most designs add a tooth, knife or V-notch that snaps the type square at the moment of printing ([ELEM:alignment-lock](../features/elem-alignment-lock.md)). Brooks's [US463723](../patents/US463723.md) says this is what frees the operator from having to place the pointer exactly.

## How they print

There are three basic ways to bring type and paper together.

| Method | Feature | Index-type patents | Example |
|---|---|---|---|
| Element to paper: the wheel, plate or arm moves down onto the paper | [IMP:element-to-platen](../features/imp-element-to-platen.md) | 45 | [DE149308](../patents/DE149308.md), [US478109](../patents/US478109.md) |
| Paper to element: the platen or carriage is rocked into a fixed type | [IMP:platen-to-element](../features/imp-platen-to-element.md) | 13 | [US352160](../patents/US352160.md), [US14907](../patents/US14907.md) |
| Hammer behind: a hammer drives paper (and ribbon) against the type | [IMP:hammer-behind](../features/imp-hammer-behind.md) | 7 | [US292854](../patents/US292854.md), [US232741](../patents/US232741.md) |

On most cheap machines your own hand provides the force ([IMP:press-through](../features/imp-press-through.md)), so the impression is only as even as your touch. Better machines use a separate print lever ([IMP:print-lever](../features/imp-print-lever.md)).

The Lexikon records the direction of the blow too: 61 of the 90 index machines are listed as top strike (the type comes down onto the paper), 22 strike from the front, and only 2 strike from below.

## How they inked

| Inking | Index machines (Lexikon) |
|---|---|
| Ink roller touching the type | 47 |
| Felt or ink pad | 16 |
| Ribbon | 13 |
| Ink disc | 3 |
| Carbon paper | 1 |

The ink roller ([INK:roller](../features/ink-roller.md)) suits a wheel or cylinder perfectly: the type rolls past it on the way to the paper. Mignon's patent [DE149308](../patents/DE149308.md) inks with a felt roller, and Brooks's wheel in [US463723](../patents/US463723.md) touches a roller and pushes it aside as it descends. Pads ([INK:pad](../features/ink-pad.md)) were common with rubber type on cheap machines. The [Columbia Index 1](../machines/columbia-index-1.md) used an ink disc ([INK:disc](../features/ink-disc.md)), and the [Westphalia](../machines/westphalia.md) (1884) carbon paper.

Ribbons ([INK:ribbon](../features/ink-ribbon.md)) came later to index machines. The Mignon shows the change: the [Mignon 1](../machines/mignon-1.md) (1902) used a roller, while the [Mignon 2](../machines/mignon-2.md) (1904) and later models used a ribbon. Many machines of the 1920s and 1930s list a ribbon, among them the [Olympia Plurotyp](../machines/olympia-plurotyp.md) and the [Tip-Tip](../machines/tip-tip.md).

## How they spaced and shifted

**Letter spacing.** The single print stroke usually also moves the paper (or the print head) on by one letter ([ESC:print-and-space](../features/esc-print-and-space.md), 54 index-type patents), most often through a pawl stepping along a toothed rack ([ESC:pawl-rack](../features/esc-pawl-rack.md), 61). A separate space key ([ESC:space-key](../features/esc-space-key.md)) gives the gaps between words.

**Spacing by letter width.** Several early inventors wanted narrow letters to take less room, and an index makes this easy because each position can carry its own stop. Thurber's [US3228](../patents/US3228.md) (1843) uses pins of different length on each key, Jones's [US8980](../patents/US8980.md) (1852) lets thick type push an extra roller, and Richardson's [US292854](../patents/US292854.md) uses hole size. See [ESC:variable-spacing](../features/esc-variable-spacing.md).

**Capitals and figures.** 52 of the 90 index machines are listed with no shift: everything they can print sits on the one chart. When a machine does shift, it is usually by sliding the wheel along its axle to a second row ([SHIFT:axial](../features/shift-axial.md)), as with the row knob of [US463723](../patents/US463723.md), or by turning it a fixed angle ([SHIFT:rotary](../features/shift-rotary.md)). A multi-row cylinder, as on the Mignon, makes a shift key unnecessary, since moving the pointer to another row of the chart slides the cylinder.

## When and where

**Early experiments (1820s to 1870s).** Many of the very first writing machines were index machines, because one moving type carrier is the simplest way to put type on paper. The library's oldest cards are Burt (1829), Thurber (1843), Eddy's grid of type bars [US7771](../patents/US7771.md) (1850) and Jones (1852). The Lexikon's index machines of this period, such as the English [Hood](../machines/hood.md) (1857) and the Russian [Alisow](../machines/alisow.md) (1872), were mostly never sold.

**The American boom (1880s and 1890s).** While keyboard machines were spreading through offices, American makers offered index machines at a fraction of their price. In this library 15 index machines appear in the 1880s and 20 in the 1890s, most of them American: Columbia, Crown, World, Morris, American Index, Simplex and many toys. The feature charts in [Mechanisms](../views/mechanisms.md) show nearly every index feature peaking in the 1880s or 1890s.

**Germany and Europe (1890s to 1930s).** German and European index machines came a little later and lasted longer. Examples are the [Edelmann](../machines/edelmann.md) (1897, about 20,000 sold according to the Lexikon), the [Volksschreibmaschine](../machines/volksschreibmaschine.md) (1898), the [Picht Index](../machines/picht-index.md) (1907) and above all AEG's Mignon, which the Lexikon says sold in large numbers in its later models. The Lexikon names the Mignon as the model for the French [Heady](../machines/heady.md) (1919), the American [Yu Ess](../machines/yu-ess.md) (1918) and the Olympia Plurotyp (1933). Other European countries had their own, such as the wooden Spanish [Hogar](../machines/hogar.md) (1921).

**Toys and small machines (1920s and 1930s).** Between the wars the index machine survived mainly as a children's or very small machine: the German [Gescha](../machines/gescha.md) and [Junior Gsn](../machines/junior-gsn.md) (both 1920), the Bakelite-cased [Carissima](../machines/carissima.md) (1934), and Louis Marx's [Dial De Luxe](../machines/dial-de-luxe.md) (1934) and [Junior Typewriter](../machines/junior-typewriter.md) (1935). The toy feature [USE:toy](../features/use-toy.md) peaks in the 1930s, after almost every other index feature has faded. Index machines for Chinese and Japanese continued even later; the Lexikon lists an East German [Optima (Chinese)](../machines/optima-chinese.md) from 1955.

For a decade-by-decade list, see the [Timeline](../views/timeline.md).

## Glossary

**English terms**

| Term | Meaning |
|---|---|
| Index | The chart, dial or scale of characters you aim at to choose a letter. |
| Pointer, indicator | The part you move over the index; it is linked to the type carrier. |
| Stylus | A pen-like pointer touched to a character field or dropped into holes. |
| Type carrier, type element | The single part holding all the type: wheel, disc, cylinder, plate, band. |
| Platen | The roller or flat bed the paper lies on when struck. |
| Print key, print lever | The separate control that makes the impression after selection. |
| Escapement | The mechanism that steps the paper or print head on by one letter. |
| Shift | Changing between rows or cases (small letters, capitals, figures). |

**German terms** met in the patents and in the Lexikon. Terms marked * appear in the German patents of this library; the others are standard vocabulary of the field.

| German | English |
|---|---|
| Zeigerschreibmaschine | Pointer typewriter, the usual German name for an index typewriter |
| Zeiger, Schreibzeiger | Pointer; writing pointer |
| Einstellzeiger * | Setting pointer, the pointer that sets the type carrier ([DE445649](../patents/DE445649.md)) |
| Zeichenfeld *, Typenfeld * | Character field, the chart of characters ([DE445649](../patents/DE445649.md), [DE484001](../patents/DE484001.md)) |
| Schriftfeld, Zeichenplatte | Character field; character plate |
| Typenrad * | Type wheel ([DE200880](../patents/DE200880.md)) |
| Typenwalze * | Type roller or cylinder ([DE465922](../patents/DE465922.md)) |
| Typenzylinder *, Typentrommel * | Type cylinder; type drum |
| Typenscheibe * | Type disc |
| Typenträger * | Type carrier ([DE266582](../patents/DE266582.md)) |
| Typenhebel * | Typebar, as on a keyboard machine |
| Typenstange * | Type rod or bar |
| Schreibwalze * | Platen, the paper roller |
| Farbband *, Farbwalze | Ink ribbon; ink roller |
| Umschaltung * | Shift |
| Taste, Tastatur | Key; keyboard |
| Kleinschreibmaschine * | Small or portable typewriter ([DE577948](../patents/DE577948.md)) |
| Kinderschreibmaschine | Children's typewriter |
| Zeichen | Characters; the Lexikon gives each machine's count as "84 Zeichen" |
| Aufschlag, Oberaufschlag, Vorderaufschlag, Unteraufschlag | Strike; top strike (down onto the platen); front strike; understrike (up to its underside, blind) |

## Where to go next

[Index machines](../views/index-machines.md) · [Mechanisms](../views/mechanisms.md) ([selection](../views/sel.md), [element](../views/elem.md), [impression](../views/imp.md), [inking](../views/ink.md), [escapement](../views/esc.md), [shift](../views/shift.md)) · [Timeline](../views/timeline.md) · [Inventors](../views/inventors.md)
