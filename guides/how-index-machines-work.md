# How index machines work

An index typewriter has no key per letter: the operator picks a character by moving a pointer, dial, stylus or lever over a chart, and then makes one print stroke that carries the chosen type to the paper. This page walks through the subsystems one at a time (choosing, holding, the element, cases, impression, inking and spacing), with the variants the patents show and the best examples of each.

*The descriptions below are drawn from the reading cards on each patent page. Those were made by machine from OCR, so details can be wrong; where a card was unclear or the link between a patent and a machine is only an inference, that is said. Counts come from [Mechanisms by subsystem](../views/mechanisms.md) and cover only the patents read so far.*

## The basic cycle

Almost every index machine does four things in order: **select** (move an indicator over a chart, and the element follows), **lock** (hold the element exactly in place), **print** (bring type and paper together through ink) and **space** (move the paper or head one letter, usually as a by-product of the print stroke).

Index machines were slower than keyboard machines, and the patents rarely pretend otherwise. What the inventors claimed instead was simplicity, low cost and few parts ([FRM:few-parts](../features/frm-few-parts.md) is the commonest frame feature among index-type patents), small size, writing in view, and easy change of alphabet. Most of the mechanisms below are ways of getting good alignment cheaply from a machine moved by an untrained hand.

## 1. Choosing the character

### The kinds of selector

| Selector | How the hand moves | Feature | Good examples |
|---|---|---|---|
| Chart and pointer | Pointer moved over a flat chart; a separate key or a press of the pointer prints | [SEL:pointer-chart](../features/sel-pointer-chart.md) | [DE149308](../patents/DE149308.md) ([Mignon 1](../machines/mignon-1.md)), [DE393929](../patents/DE393929.md) ([Gerda 2](../machines/gerda-2.md)) |
| Arc arm | Arm swung over a semicircular or sector scale | [SEL:arc-arm](../features/sel-arc-arm.md) | [US510214](../patents/US510214.md) ([American Index](../machines/american-index.md)), [US567365](../patents/US567365.md) |
| Dial | Knob or handle turned to a letter on a dial | [SEL:dial](../features/sel-dial.md) | [US247058](../patents/US247058.md), [US352160](../patents/US352160.md) |
| Element as index | The type wheel itself is twirled, its letters read directly | [SEL:index-wheel](../features/sel-index-wheel.md) | [US322989](../patents/US322989.md), [US478109](../patents/US478109.md) |
| Sliding index | Slider or type bar moved along a straight index | [SEL:linear-slider](../features/sel-linear-slider.md) | [US318426](../patents/US318426.md), [US470633](../patents/US470633.md), [US457840](../patents/US457840.md) |
| Pointer in a hole | Pointer dropped into a hole or notch per character | [SEL:pointer-hole](../features/sel-pointer-hole.md) | [US380792](../patents/US380792.md) ([Velograph 2](../machines/velograph-2.md)), [US453593](../patents/US453593.md) |
| Stylus and plate | Stylus touched to a letter on a perforated plate | [SEL:stylus-plate](../features/sel-stylus-plate.md) | [US292854](../patents/US292854.md) |
| Positioning keys | Keys that only set the element; one key prints | [SEL:dummy-keyboard](../features/sel-dummy-keyboard.md) | [US647804](../patents/US647804.md) |

**Chart and pointer** is the classic form and the commonest selector among index-type patents (43). The oldest card in the library is Burt's 1829 [USX5581](../patents/USX5581.md) ([Burt](../machines/burt.md)): a type segment on a swinging lever is brought to the print point by hand and a separate lever prints. In [DE149308](../patents/DE149308.md), the patent behind the [Mignon 1](../machines/mignon-1.md), one handle over a checkerboard chart both turns and slides a type cylinder. Its stated problem was that a short handle stroke makes the chart too small to read, so it adds a linkage that magnifies the pointer's travel.

**The arc arm** suits an element turning about one axis. In Valiquet's [US510214](../patents/US510214.md) (linked with high confidence to the [American Index](../machines/american-index.md)) the finger sits in a cup on a pointer fixed to the hub of a rubber type segment, so arm and element are one part. Spivey's [US567365](../patents/US567365.md) (1896) gears a sweep arm to a wheel so one sweep equals one turn.

**Dials and twirled wheels** were the cheapest. Herrington's [US247058](../patents/US247058.md) (1881) turns a dial pointer and type wheel on one stem knob, pushed in to print. Charles Spiro's patents ([US322989](../patents/US322989.md), [US352160](../patents/US352160.md)) put a twirling handle on the wheel's own axis; the [Columbia Index 1](../machines/columbia-index-1.md) and [Columbia Index 2](../machines/columbia-index-2.md) are linked to them with medium confidence.

**Sliding indexes** put all the type on one bar or plate. Guhl's [US318426](../patents/US318426.md) (1885) slides a single type bar beside a reversed chart, and Odell's [US457840](../patents/US457840.md) (1891) does the same with a stylus that drops into a comb ([Odell 1 A (Rund)](../machines/odell-1-a-rund.md), high confidence).

**Positioning keys** are the odd branch. In Byer's [US647804](../patents/US647804.md) (1900) index keys only put a stop in the path of an arm on the wheel shaft; one actuating key then spins the wheel against that stop and fires the hammer.

Charts could also be swapped with the element for other fonts or languages ([SEL:chart-interchangeable](../features/sel-chart-interchangeable.md)), first seen in McKinley's [US232741](../patents/US232741.md) (1880). Even legibility got patents: Anderson's [US318077](../patents/US318077.md) (1885) complains that on the Hall the characters sit at the bottom of deep dark holes, and lines the holes with white or luminous material.

### How the pointer drives the element

| Coupling | How | Example |
|---|---|---|
| Direct | Pointer fixed to the element's hub, or the element is the handle | [US510214](../patents/US510214.md), [US322989](../patents/US322989.md), [US380792](../patents/US380792.md) |
| Rack and pinion, or gear segment | Pointer on a rack or toothed sector meshing with a pinion on the element shaft | [US463723](../patents/US463723.md), [US342302](../patents/US342302.md), [DE393929](../patents/DE393929.md) |
| Cord | Cord from the pointer wound on a pulley on the shaft, spring return or a second cord | [US309780](../patents/US309780.md), [US432981](../patents/US432981.md), [US438665](../patents/US438665.md) |
| Screw | Pointer pin rides a spiral groove on the shaft | [US429195](../patents/US429195.md) |
| Levers or linkage | Pointer far from the element, joined by linkage | [DE149308](../patents/DE149308.md) |

The patents argue about these openly. Weiss's [US438665](../patents/US438665.md) (1890) notes that when a register wheel snaps the type into place at the blow, the pointer must follow, or something strains and wears; a screw cannot be driven backwards. His answer is a cord wound oppositely on two equal pulleys, so either end drives the other. Max Cohn's [US432981](../patents/US432981.md) (1890) uses one cord and a shaft spring, with a stop in case the cord breaks.

Emig's [DE393929](../patents/DE393929.md) (1924), behind the [Gerda 2](../machines/gerda-2.md), states the case against long linkages: setting is imprecise and parts bend at the blow. He put the chart directly above the wheel axis and drove the wheel through a toothed segment.

## 2. Holding the element in place for the print

A hand-set pointer is never exact, so nearly every index machine has something that finds the true position and holds it ([SEL:selector-locking](../features/sel-selector-locking.md), 53 index-type patents, and [ELEM:alignment-lock](../features/elem-alignment-lock.md), 28). There are two jobs here: a light **detent** that gives the hand a click at each character, and a firm **lock** that engages on the print stroke and corrects the last bit of error.

| Method | What engages | Example |
|---|---|---|
| Spring detent in a notched wheel | Spring or click drops into notches, one per character | [US175661](../patents/US175661.md), [US352160](../patents/US352160.md) |
| Notched index and pawl | Pin or lug on the pointer lever drops into notches in the chart | [US432981](../patents/US432981.md), [US672680](../patents/US672680.md) |
| Locking pin in a hole | Pin enters a hole or countersink per character | [US380792](../patents/US380792.md), [US438971](../patents/US438971.md), [US355703](../patents/US355703.md) |
| Notch on a fixed pin | Notch per type on the element seats on one pin | [US478109](../patents/US478109.md), [US429195](../patents/US429195.md) |
| V-notch or V-tooth | Wedge-shaped tooth enters a V-notched wheel or rack on the print stroke | [US463723](../patents/US463723.md), [US476942](../patents/US476942.md), [US342302](../patents/US342302.md) |
| Two-axis lock | Separate locks for rotation and for row | [DE149308](../patents/DE149308.md), [DE332718](../patents/DE332718.md), [DE393929](../patents/DE393929.md) |

**Detents.** Calahan's 1876 toy [US175661](../patents/US175661.md) already has a spring with a double-inclined end dropping into a "rag wheel" with one notch per letter. Spiro's machines use a click spring for the hand and a separate lock for the blow.

**Pins in holes** locate and hold at once. In Eggis's [US380792](../patents/US380792.md) (1888) the pointed end of the knob arm enters a marked hole in the top plate as the disc is pressed. In Youngs's [US438971](../patents/US438971.md) (1890) a pin enters a countersunk hole behind the chosen type, and Becker's [US350717](../patents/US350717.md) uses a segment of countersunk holes that he says corrects small misplacement.

**V-notches and V-teeth** let the print stroke finish the selection. Byron Brooks's [US463723](../patents/US463723.md) (1891) drops a notched wheel on the type-wheel shaft onto a V-shaped anvil just before impact, so the operator need not align the pointer exactly; [US476942](../patents/US476942.md) (1892) puts a V tooth on the platen carriage that enters the nearest notch at every stroke. Both are linked with medium confidence to the [Crown Index 1](../machines/crown-index-1.md). Kempster's [US342302](../patents/US342302.md) (1886, [Boston](../machines/boston.md)) and Becker's flat-plate [US455299](../patents/US455299.md) (a chisel point in a tooth space) work the same way. The trade-off, as Weiss saw, is that the correcting lock must move the whole selector train.

**Two-axis locks.** A cylinder needs locking in rotation and along its axis. The Mignon patent [DE149308](../patents/DE149308.md) uses one knife in a comb and another in a star wheel as the frame descends; Vester's [DE332718](../patents/DE332718.md) (1921) drops cutting edges into a gear rim and a groove ring; Emig's Gerda patent holds the row with a pawl that has one notch per row.

## 3. The type element

| Element | Type faces | Feature | Examples |
|---|---|---|---|
| Wheel (types on the rim) | Parallel to the axis | [ELEM:wheel-rim](../features/elem-wheel-rim.md) | [US463723](../patents/US463723.md), [US322989](../patents/US322989.md), [DE393929](../patents/DE393929.md) |
| Disc (types on the face) | Perpendicular to the axis | [ELEM:disc-face](../features/elem-disc-face.md) | [US380792](../patents/US380792.md), [DE33343](../patents/DE33343.md), [US510222](../patents/US510222.md) |
| Ring | Around an annulus | [ELEM:ring](../features/elem-ring.md) | [US455561](../patents/US455561.md), [US357090](../patents/US357090.md) |
| Cylinder with several rows | Rows along its length | [ELEM:cylinder-multirow](../features/elem-cylinder-multirow.md) | [DE149308](../patents/DE149308.md), [US453593](../patents/US453593.md) |
| Segment or sector | Part of a circle | [ELEM:sector-segment](../features/elem-sector-segment.md) | [US510214](../patents/US510214.md), [US350717](../patents/US350717.md) |
| Flat plate | A grid | [ELEM:plate-flat](../features/elem-plate-flat.md) | [US355703](../patents/US355703.md), [US455299](../patents/US455299.md), [US7771](../patents/US7771.md) |
| Straight bar | A row along a rule | [ELEM:linear-bar](../features/elem-linear-bar.md) | [US318426](../patents/US318426.md), [US470633](../patents/US470633.md) |
| Band | A flexible strip | [ELEM:band](../features/elem-band.md) | [US369401](../patents/US369401.md), [US1121284](../patents/US1121284.md) |
| Individual slugs | Loose types or plungers in a carrier | [ELEM:individual-slugs](../features/elem-individual-slugs.md) | [US545403](../patents/US545403.md), [DE332718](../patents/DE332718.md) |

The **wheel** dominates: 39 of the 90 index machines in the [index machines view](../views/index-machines.md) are type-wheel machines. It is light, turns quickly and can be inked by a roller on its rim. **Discs** with types on the face appear in the Simplex family ([Simplex Type Writer](../machines/simplex-type-writer.md)); [DE33343](../patents/DE33343.md) (1885) cuts radial tongues in a thin sheet-metal disc, each with a vulcanized rubber type. **Cylinders** carry many characters in a small space and belong mostly to 1900–1940 ([Mignon 1](../machines/mignon-1.md), [Olympia Plurotyp](../machines/olympia-plurotyp.md), [Tip-Tip](../machines/tip-tip.md)). **Plates** and **bars** are the simplest and mostly of the 1880s ([Hall 1](../machines/hall-1.md), [World 1](../machines/world-1.md), [Morris](../machines/morris.md)). **Bands** stayed rare: Enjalbert's [US369401](../patents/US369401.md) (1887) stretches a swappable rubber band round a wheel, and Payne's [US1121284](../patents/US1121284.md) (1914) moves a band lengthwise under an index.

### Rubber or metal

Rubber type ([ELEM:rubber-type](../features/elem-rubber-type.md), 23 index-type patents) was cheap to mould, quiet, and printed with a soft hand press through a slot. It wore, though: Becker's [US350717](../patents/US350717.md) avoids bearing surfaces next to the rubber for that reason, and his follow-up [US454837](../patents/US454837.md) says rigid ink surfaces wore the type. Metal type ([ELEM:metal-type](../features/elem-metal-type.md)) gave sharper print and copies but wanted a controlled blow; Kempster's [US342302](../patents/US342302.md) adds a screw stop so soft metal type is not battered, and Albert Dick's [US545403](../patents/US545403.md) (1895) uses loose metal type struck by a hammer so a cheap machine can make manifold copies and cut mimeograph stencils.

### Making and mounting

Types were soldered or set on ([US3228](../patents/US3228.md), Thurber 1843, a type soldered to each key on a wheel; Spiro's [US352160](../patents/US352160.md); Kempster's set screws), electrotyped as a strip wrapped on a rim ([US309780](../patents/US309780.md), [US357090](../patents/US357090.md), [US545594](../patents/US545594.md)), held loose in slots ([US247058](../patents/US247058.md), [US545403](../patents/US545403.md)), carried as spring pistons in radial bores ([DE332718](../patents/DE332718.md)), or set on detachable row strips (Cohn's [US432982](../patents/US432982.md)).

Easy change of fonts or languages was one of the index machine's strongest claims ([ELEM:interchangeable](../features/elem-interchangeable.md), 19 index-type patents). McKinley's [US232741](../patents/US232741.md) makes the wheel quick to swap because machines of the day could not change style or alphabet without interrupting work; Blickensderfer's [US666176](../patents/US666176.md) swings the ink-roll frame aside to lift the wheel off; Vester's [DE332718](../patents/DE332718.md) carries several fonts on one cylinder instead of changing parts.

## 4. Cases and shift

An index element with one row of 40 or so characters prints only one case. The patents show four ways to get more.

| Method | How | Feature | Examples |
|---|---|---|---|
| Axial shift | Several rows on one element; slide it along its axis | [SHIFT:axial](../features/shift-axial.md) | [US463723](../patents/US463723.md), [US432982](../patents/US432982.md), [DE57454](../patents/DE57454.md) |
| Rotary shift | Several sets around one element; turn it by a fixed angle | [SHIFT:rotary](../features/shift-rotary.md) | [US382146](../patents/US382146.md), [US438971](../patents/US438971.md), [US455561](../patents/US455561.md) |
| Two-axis chart | Every character has its own field; no shift at all | [SEL:pointer-chart](../features/sel-pointer-chart.md) | [DE149308](../patents/DE149308.md), [US453593](../patents/US453593.md), [DE393929](../patents/DE393929.md) |
| Several characters per field | One chart field serves two or three characters, chosen by key or section | | [US533530](../patents/US533530.md), [DE377030](../patents/DE377030.md) |

**Axial shift** suits a wheel with two or three rows. In Brooks's [US463723](../patents/US463723.md) a knob lever slides the wheel along a splined shaft, held by a notched catch; Cohn's [US432982](../patents/US432982.md) moves a three-row wheel by a pin in a hub groove. [DE57454](../patents/DE57454.md) (1891) lifts the wheel to a second "wreath" of capitals when the operator pulls out an extension of the pointer's finger ring, with a cone-edged disc to finish the lift if the pull was only part way. Spiro's [US352160](../patents/US352160.md) stacks two wheels and gives the other hand a shift key.

**Rotary shift** puts two alphabets round one row and turns the element part of a turn to switch. Escobar's [US382146](../patents/US382146.md) (1888) states the aim: more characters without a second index plate. Eggis's [US455561](../patents/US455561.md) has two fingers on the bell, so one chart alphabet serves both halves of the ring depending on which finger is read.

**Two-axis charts** avoid shift by giving each character its own field; the element follows the pointer on both axes, as in the cylinder machines ([DE149308](../patents/DE149308.md)) and the Gerda's three arc rows ([DE393929](../patents/DE393929.md)). The cost is a big chart: [DE377030](../patents/DE377030.md) (1923) counts 84 fields.

**Several characters per field** answers that. Dick's [US533530](../patents/US533530.md) (1895) repeats the alphabet in groups on the wheel and gives the index wheel one section per group, so each chart space is a wider target. [DE377030](../patents/DE377030.md) puts two keys per field, "small" and "large", the second also offsetting the cylinder; an earlier two-per-field design, it says, needed a push button on the pointer, a third hand action.

## 5. Making the impression

| Method | What moves | Feature | Examples |
|---|---|---|---|
| Element to paper | The element, its frame or the whole head swings or is pressed down | [IMP:element-to-platen](../features/imp-element-to-platen.md) | [US463723](../patents/US463723.md), [US453593](../patents/US453593.md), [DE393929](../patents/DE393929.md) |
| Pressed through | The operator's hand pushes the type through a slot | [IMP:press-through](../features/imp-press-through.md) | [US510214](../patents/US510214.md), [US369401](../patents/US369401.md), [US478109](../patents/US478109.md) |
| Paper to element | The platen or paper carriage tilts into a fixed element | [IMP:platen-to-element](../features/imp-platen-to-element.md) | [US14907](../patents/US14907.md), [US352160](../patents/US352160.md), [US567365](../patents/US567365.md) |
| Hammer | A hammer strikes the type, or the paper into the type | [IMP:hammer-behind](../features/imp-hammer-behind.md) | [US545403](../patents/US545403.md), [US647804](../patents/US647804.md), [US443547](../patents/US443547.md) |
| Stored spring | A spring is cocked and released, so the blow does not depend on the hand | [IMP:spring-energy](../features/imp-spring-energy.md) | [US461865](../patents/US461865.md) |

**Element to paper** is by far the commonest (45 index-type patents): the element sits in a spring-raised hinged frame, and pressing the pointer, handle or a print key swings it down. In the simplest machines the selecting hand also prints ([SEL:pointer-press-prints](../features/sel-pointer-press-prints.md)), as in [US463723](../patents/US463723.md) and [US453593](../patents/US453593.md). Others add a print key ([IMP:print-lever](../features/imp-print-lever.md)), as in the Gerda's [DE393929](../patents/DE393929.md) and Valiquet's [US510214](../patents/US510214.md), so one hand can stay on the pointer. A slotted shield over the paper often lets only the chosen type touch it ([US478109](../patents/US478109.md), [US357090](../patents/US357090.md)).

**Paper to element** keeps the element still. Cooper's [US14907](../patents/US14907.md) (1856, [Cooper](../machines/cooper.md)) makes this the point of the invention: earlier wheel machines moved the wheel to the paper. Spiro's [US352160](../patents/US352160.md) rocks the paper carriage against the wheel; Spivey's [US567365](../patents/US567365.md) swings the platen into it, and closes one tooth space of the brake wheel so a "space" setting cannot print.

**Hammers** gave a sharp, even blow. Dick's [US545403](../patents/US545403.md) strikes loose type for stencil work. Byer's [US647804](../patents/US647804.md) drives the paper against ribbon and type, stopping the bail on a block so the hammer rebounds and the wheel does not smear the print. Smith's [US443547](../patents/US443547.md) puts the hammer on the registering latch, so one part locks and strikes.

**Stored springs** take the blow out of the hand. Brooks's keyboard wheel machine [US461865](../patents/US461865.md) cocks and trips a platen rod so a spring snaps the paper against a stationary wheel, to avoid a heavy swinging wheel. Only 3 index-type patents show it. More often inventors just made the blow adjustable ([IMP:impression-adjust](../features/imp-impression-adjust.md)): a stop screw in [US322989](../patents/US322989.md), a yielding print stud for different papers in [US454837](../patents/US454837.md).

## 6. Inking

| Method | How | Feature | Examples |
|---|---|---|---|
| Roller on the element | Felt or composition roller rests on the type and swings aside | [INK:roller](../features/ink-roller.md) | [US463723](../patents/US463723.md), [US476942](../patents/US476942.md), [DE149308](../patents/DE149308.md) |
| Pad | Type rubs over, or presses through, an inked pad | [INK:pad](../features/ink-pad.md) | [US355703](../patents/US355703.md), [US455299](../patents/US455299.md), [US350717](../patents/US350717.md) |
| Ink disc | A turning disc inks the type, or sits between type and paper | [INK:disc](../features/ink-disc.md) | [US335392](../patents/US335392.md), [US400265](../patents/US400265.md), [DE33343](../patents/DE33343.md) |
| Ribbon | Inked ribbon between type and paper | [INK:ribbon](../features/ink-ribbon.md) | [US432982](../patents/US432982.md), [US357090](../patents/US357090.md), [US309780](../patents/US309780.md) |

Rollers and pads are the index machine's own methods: of the 90 index machines in the Lexikon, 47 are listed with an ink roller and 16 with a pad, against 13 with a ribbon. A wheel turning past a roller inks itself as the operator selects, with no ribbon feed or reverse. The roller must clear the print point: in Brooks's [US463723](../patents/US463723.md) the descending wheel pushes it aside with a pin, and in [US476942](../patents/US476942.md) a link from the platen carriage moves it. Vester's [DE332718](../patents/DE332718.md) has a wick-fed roller that swings onto the chosen type and away.

Pads suited plates and segments, rubbed across the pad or pressed through a hole in it ([US355703](../patents/US355703.md)). Becker's [US454837](../patents/US454837.md) switched to freely turning felt discs because rigid ink surfaces wore the rubber type. The **ink disc** was Spiro's speciality: in [US335392](../patents/US335392.md) a disc on a pendulous arm rides the rim and swings aside at the print stroke; in [US400265](../patents/US400265.md) a gravity pawl turns the disc a little each stroke for a fresh surface. Both Columbia index machines are listed with ink discs.

**Ribbons** came in mostly for clean copies. Moore's [US357090](../patents/US357090.md) wants a ribbon so carbon copies are not marked by ink buffers; Cohn's [US432982](../patents/US432982.md) winds it in either direction from the print stroke. The cylinder machines moved to ribbons too: from the [Mignon 2](../machines/mignon-2.md) on they are listed with ribbon, the Mignon 1 with a roller.

## 7. Spacing and the carriage

### Print and space in one stroke

Almost every index machine spaces as a side effect of printing ([ESC:print-and-space](../features/esc-print-and-space.md), 54 index-type patents), usually by a pawl on a rack ([ESC:pawl-rack](../features/esc-pawl-rack.md), 61). The print frame's down-and-up motion drops the pawl into the next tooth on one stroke and moves the carriage on the other: a gravity pawl on the carriage heel in [US478109](../patents/US478109.md), a pawl, ratchet and cog wheel in [US432981](../patents/US432981.md), spacing on the return stroke with a detent against overrun in [US309780](../patents/US309780.md). Timing mattered: Valiquet's [US510214](../patents/US510214.md) drives the carriage only on release, and Youngs's [US438971](../patents/US438971.md) latches it during impression. Some machines used a spring-driven carriage with a two-dog escapement, as keyboard machines did (Enjalbert's [US369401](../patents/US369401.md), [ESC:spring-drum](../features/esc-spring-drum.md)). Word spaces came from a blank position on the element ([US429195](../patents/US429195.md)), a stroke that stops short of printing ([US350717](../patents/US350717.md)), or a space key ([ESC:space-key](../features/esc-space-key.md)).

### Moving head or moving paper

Many small machines kept the paper still and stepped the whole print head along a rack ([ESC:moving-print-head](../features/esc-moving-print-head.md), 18 index-type patents), as in Becker's [US350717](../patents/US350717.md) and [DE41127](../patents/DE41127.md) (1887). That kept them small and let them write on bound books or flat surfaces ([PAP:flat-bed](../features/pap-flat-bed.md)): Dodge's [US312981](../patents/US312981.md) rides a frame over the book, Smith's [US443547](../patents/US443547.md) slides a thin platform between the pages, and Larson's [US545594](../patents/US545594.md) adds a radius bar for writing along a circle.

### Variable spacing

A wheel gives a natural place to store each letter's width ([ESC:variable-spacing](../features/esc-variable-spacing.md)). Thurber's 1843 [US3228](../patents/US3228.md) sets the step by a pin on each key, so narrow letters do not leave big gaps. Spiro's [US322989](../patents/US322989.md) (1885) puts pins of different lengths on the wheel that limit the feed pawl to 1 to 4 teeth, and [US335392](../patents/US335392.md) uses rim recesses of different depth. Brooks's [US463723](../patents/US463723.md) puts set pins on the selector rack, and Richardson's [US292854](../patents/US292854.md) (1884) sets the step by how deep the stylus can press, fixed by the hole diameter in the letter plate. Garner and Laganke's [US375062](../patents/US375062.md) (1887) goes furthest: to speed up a Hall-type machine it adds rows of common two-, three- and four-letter words to the plate and chart, and steps the carriage by the length of the word.

## Where to read further

[Mechanisms by subsystem](../views/mechanisms.md) links the per-subsystem pages ([sel](../views/sel.md), [elem](../views/elem.md), [shift](../views/shift.md), [imp](../views/imp.md), [ink](../views/ink.md), [esc](../views/esc.md)), each listing index-type patents in date order; [Index machines](../views/index-machines.md) groups the 90 machines by carrier; each feature page lists every patent showing it.
