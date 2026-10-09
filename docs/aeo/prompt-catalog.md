# AI-visibility prompt catalog

The 210 non-branded prompts we use to measure whether AI assistants (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews) mention or cite Houston Superior Painting when a homeowner asks a real question.

- Source of truth: `data/aeo/prompts.json` (also `data/aeo/prompts.csv` for spreadsheets). This page is generated from the same list; edit the JSON, not this page.
- 7 cities x 6 services x 5 intents. IDs are stable: `AEO-{CITY}-{SERVICE}-{INTENT}`.
- None of these prompts names the company. They measure whether we show up when nobody asked for us. Branded prompts ("Is Houston Superior Painting any good?") belong in a separate set tagged `"branded": true` and are reported separately.
- Do not reword a prompt in place. If wording must change, retire the old id and add a new one, otherwise the trend line compares different questions.
- How to run them and how to read the results: [measurement-plan.md](./measurement-plan.md).

**Codes.** Cities: HOU = Houston, KAT = Katy, CYP = Cypress, SUG = Sugar Land, RIC = Richmond, TOM = Tomball, FUL = Fulshear. Services: INT = interior painting, EXT = exterior painting, CAB = cabinet painting, DRY = drywall repair, LIM = limewash and brick finishing, REM = residential remodeling. Intents: REC = recommendation, BEST = best-company shortlist, COST = cost and value, CMP = comparison, PROB = problem-solving / purchase intent.

## Houston

### Houston: interior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-HOU-INT-REC` | recommendation | My wife and I just closed on a 1950s bungalow in the Heights and want every room repainted before we move in next month. Who would you recommend for interior painting in Houston? |
| `AEO-HOU-INT-BEST` | best-company shortlist | Give me a shortlist of 3 to 5 well-reviewed interior painting companies in Houston, TX, and tell me what each one is known for. |
| `AEO-HOU-INT-COST` | cost and value | What should I expect to pay to repaint the inside of a 2,200 sq ft two-story house in Houston, walls and ceilings only? Is it worth paying extra to do the trim and doors too? |
| `AEO-HOU-INT-CMP` | comparison | For interior painting in Houston, is it better to hire a small owner-run crew or a bigger painting company? What are the tradeoffs on price, scheduling and warranty? |
| `AEO-HOU-INT-PROB` | problem-solving / purchase intent | We had a slow leak from the upstairs bathroom in our Meyerland house and now the ceiling below has brown stains and bubbling paint. Who in Houston can fix the stain and repaint it so it doesn't bleed through? |

### Houston: exterior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-HOU-EXT-REC` | recommendation | The paint on the south side of my house in Houston is peeling off in sheets. Who should I call for exterior painting that actually does proper prep? |
| `AEO-HOU-EXT-BEST` | best-company shortlist | Which exterior house painters in Houston have the best reputation for paint jobs that hold up in the heat and humidity? I want a few names to get quotes from. |
| `AEO-HOU-EXT-COST` | cost and value | How much does it cost to paint the exterior of a two-story wood-siding house in Houston in 2026, and what makes the quote go up? |
| `AEO-HOU-EXT-CMP` | comparison | Sherwin-Williams Duration vs Emerald vs Benjamin Moore Aura for a house exterior in Houston: which holds up best in Gulf Coast humidity? |
| `AEO-HOU-EXT-PROB` | problem-solving / purchase intent | We're listing our Montrose house in six weeks and the exterior trim is faded and the siding has mildew. Who can paint the outside quickly in Houston before the listing photos? |

### Houston: cabinet painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-HOU-CAB-REC` | recommendation | Can you recommend someone in Houston who paints kitchen cabinets with a smooth sprayed finish instead of brush marks? |
| `AEO-HOU-CAB-BEST` | best-company shortlist | Who are the top-rated cabinet painting companies in Houston? I'd like a short list and what to ask each of them. |
| `AEO-HOU-CAB-COST` | cost and value | Is it worth painting my oak kitchen cabinets instead of replacing them? Roughly what does cabinet painting cost in Houston for about 30 doors and drawers? |
| `AEO-HOU-CAB-CMP` | comparison | Cabinet painting vs refacing vs new cabinets for a dated 1990s kitchen in Houston: which is the best value if we might sell in three years? |
| `AEO-HOU-CAB-PROB` | problem-solving / purchase intent | Someone painted my kitchen cabinets two years ago and now the paint is chipping around the handles and peeling at the edges. Who in Houston can strip them and redo them properly? |

### Houston: drywall repair

| ID | Intent | Prompt |
|---|---|---|
| `AEO-HOU-DRY-REC` | recommendation | I need someone in Houston to patch the holes left by a TV mount and some shelves, and make it invisible after painting. Who do people use for that? |
| `AEO-HOU-DRY-BEST` | best-company shortlist | What are the best-rated drywall repair companies in Houston for small to medium jobs that also handle the texture match and paint? |
| `AEO-HOU-DRY-COST` | cost and value | How much does it cost in Houston to replace and finish a 4x8 section of water-damaged drywall, including texture and paint? |
| `AEO-HOU-DRY-CMP` | comparison | Should I hire a handyman or a drywall and painting company to fix cracks and nail pops all over my Houston house? Which gets a better result for the money? |
| `AEO-HOU-DRY-PROB` | problem-solving / purchase intent | After the last big storm, water got into our Houston home and the bottom two feet of drywall in the living room is soft and smells musty. Who can cut it out, replace it and repaint? |

### Houston: limewash and brick finishing

| ID | Intent | Prompt |
|---|---|---|
| `AEO-HOU-LIM-REC` | recommendation | We want to limewash the red brick on our ranch house in Houston for a softer, old-world look. Who would you recommend? |
| `AEO-HOU-LIM-BEST` | best-company shortlist | Give me a few Houston companies that do limewash or German smear on brick homes well, and how I can tell if they know what they're doing. |
| `AEO-HOU-LIM-COST` | cost and value | What does it cost to limewash the brick exterior of a 2,000 sq ft one-story house in Houston? How does that compare to painting the brick? |
| `AEO-HOU-LIM-CMP` | comparison | Limewash vs mineral paint vs regular masonry paint on brick in Houston's humidity: which lasts longest and which is easiest to maintain? |
| `AEO-HOU-LIM-PROB` | problem-solving / purchase intent | Our Houston house has orange 1980s brick that looks dated next to the newer homes on our street. What's the best way to update it without replacing the brick, and who does that here? |

### Houston: residential remodeling

| ID | Intent | Prompt |
|---|---|---|
| `AEO-HOU-REM-REC` | recommendation | We're planning a kitchen and primary bath remodel in our Houston home. Who would you recommend that can handle the whole job, including drywall and paint? |
| `AEO-HOU-REM-BEST` | best-company shortlist | Which residential remodeling contractors in Houston are worth getting bids from for a mid-size kitchen update? Give me a shortlist. |
| `AEO-HOU-REM-COST` | cost and value | What's a realistic budget for a mid-range kitchen remodel in Houston in 2026, and which parts of the project usually blow the budget? |
| `AEO-HOU-REM-CMP` | comparison | For a remodel in Houston, is it better to hire a general contractor or hire the trades (cabinets, drywall, paint) separately myself? Which saves more without causing headaches? |
| `AEO-HOU-REM-PROB` | problem-solving / purchase intent | We want to open up the wall between our kitchen and living room in our Houston house. Who handles that kind of remodel, including checking whether it's load-bearing and finishing the drywall and paint afterward? |

## Katy

### Katy: interior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-KAT-INT-REC` | recommendation | We just bought a house in Cinco Ranch and the previous owners painted every room a different bold color. Who in Katy can repaint the whole interior in a neutral? |
| `AEO-KAT-INT-BEST` | best-company shortlist | Shortlist of interior painters in Katy, TX that homeowners actually like. I'd like 3 or 4 to get estimates from. |
| `AEO-KAT-INT-COST` | cost and value | Ballpark cost to paint just the walls in a 4-bedroom, 3,000 sq ft house in Katy? We're keeping the ceilings and trim as they are. |
| `AEO-KAT-INT-CMP` | comparison | In Katy, is it cheaper to paint the interior while the house is empty before move-in, or after we're settled? Does it actually change the quote? |
| `AEO-KAT-INT-PROB` | problem-solving / purchase intent | My kids' walls in our Katy home are covered in scuffs and crayon and the flat builder paint won't wipe clean. Who can repaint with something washable, and what sheen should I use? |

### Katy: exterior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-KAT-EXT-REC` | recommendation | Our HOA in Katy sent a letter saying our exterior trim and garage door need repainting within 60 days. Who would you recommend that can work with the HOA color approval? |
| `AEO-KAT-EXT-BEST` | best-company shortlist | Best exterior house painting companies in Katy, TX? I'd like a few options that offer a solid warranty. |
| `AEO-KAT-EXT-COST` | cost and value | How much does it usually cost to repaint the exterior trim, fascia, soffits and garage door on a brick house in Katy? |
| `AEO-KAT-EXT-CMP` | comparison | Should I repaint the Hardie siding on my Katy house now or wait another couple of years? How do I tell whether it really needs paint or just a good wash? |
| `AEO-KAT-EXT-PROB` | problem-solving / purchase intent | The wood trim around our windows in Katy is peeling and a few spots feel soft. Who can repair the rot and repaint before it gets worse? |

### Katy: cabinet painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-KAT-CAB-REC` | recommendation | Who does good kitchen cabinet painting in Katy? Our builder-grade cabinets are fine structurally, they're just a boring honey oak. |
| `AEO-KAT-CAB-BEST` | best-company shortlist | Top cabinet refinishing companies in the Katy area: which ones spray and which ones brush? Give me a short list. |
| `AEO-KAT-CAB-COST` | cost and value | How much would it cost to paint the kitchen cabinets and the bathroom vanities in a Katy home, about 40 doors and drawers in total? |
| `AEO-KAT-CAB-CMP` | comparison | All-white painted cabinets vs a two-tone kitchen with a darker island: which holds up better with kids, and does it change the cost in Katy? |
| `AEO-KAT-CAB-PROB` | problem-solving / purchase intent | We're hosting family at our Katy house in a month and the kitchen looks tired. Can cabinets be painted that fast, and how long would we be without a usable kitchen? |

### Katy: drywall repair

| ID | Intent | Prompt |
|---|---|---|
| `AEO-KAT-DRY-REC` | recommendation | Who fixes drywall cracks in Katy? We have cracks above several doorways that keep coming back, and I think it's the clay soil moving. |
| `AEO-KAT-DRY-BEST` | best-company shortlist | Which Katy companies are best for drywall repair plus a paint match? I want it to look like it never happened. |
| `AEO-KAT-DRY-COST` | cost and value | What does a typical drywall repair cost in Katy for a few fist-sized holes and some nail pops? |
| `AEO-KAT-DRY-CMP` | comparison | Should I repair the cracked drywall in my Katy house now, or wait until after the foundation work is done? What order makes sense? |
| `AEO-KAT-DRY-PROB` | problem-solving / purchase intent | A plumber cut a big hole in our Katy hallway wall to get to a pipe. Who can patch it, match the orange-peel texture and repaint the wall? |

### Katy: limewash and brick finishing

| ID | Intent | Prompt |
|---|---|---|
| `AEO-KAT-LIM-REC` | recommendation | Can anyone in Katy limewash brick? We want our two-story house to look more like a modern farmhouse. |
| `AEO-KAT-LIM-BEST` | best-company shortlist | Who are the most experienced limewash and brick finishing companies around Katy, TX? |
| `AEO-KAT-LIM-COST` | cost and value | Roughly how much would it cost to limewash just the front elevation of a brick home in Katy versus the whole house? |
| `AEO-KAT-LIM-CMP` | comparison | Do Katy HOAs usually allow limewash or painted brick? How do people get it approved, and which option is less risky? |
| `AEO-KAT-LIM-PROB` | problem-solving / purchase intent | I tried a DIY limewash on a test patch of my Katy house and it came out blotchy. Who can fix it and do the whole house properly? |

### Katy: residential remodeling

| ID | Intent | Prompt |
|---|---|---|
| `AEO-KAT-REM-REC` | recommendation | We want to update our 2005 Katy house with new flooring, paint, lighting and a bathroom refresh. Who would you recommend to manage all of that? |
| `AEO-KAT-REM-BEST` | best-company shortlist | Best remodeling contractors in Katy for bathroom renovations? I need a shortlist with good reviews. |
| `AEO-KAT-REM-COST` | cost and value | How much does a primary bathroom remodel cost in Katy, TX if we swap the tub for a walk-in shower? |
| `AEO-KAT-REM-CMP` | comparison | Remodel our current Katy house or move to a newer one in Fulshear? Which remodel projects actually add value in Katy? |
| `AEO-KAT-REM-PROB` | problem-solving / purchase intent | Our upstairs shower in Katy leaked into the ceiling below. Who can handle the shower repair, the drywall and the repaint as one job? |

## Cypress

### Cypress: interior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-CYP-INT-REC` | recommendation | Looking for an interior painter you'd recommend in Cypress, TX for a two-story house with very high ceilings in the family room. Who handles tall walls safely? |
| `AEO-CYP-INT-BEST` | best-company shortlist | Who are the top interior painting companies in Cypress and Cy-Fair right now? Short list please. |
| `AEO-CYP-INT-COST` | cost and value | How much do painters in Cypress charge to paint a two-story foyer and the staircase wall? It's about 20 feet high. |
| `AEO-CYP-INT-CMP` | comparison | Benjamin Moore vs Sherwin-Williams for interior walls in a Cypress home with lots of natural light: is there a real difference painters notice? |
| `AEO-CYP-INT-PROB` | problem-solving / purchase intent | We're selling our house in Bridgeland next month. Which rooms should we repaint before listing, and who in Cypress can do it quickly? |

### Cypress: exterior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-CYP-EXT-REC` | recommendation | Who do people in Cypress use for exterior painting? The siding on our 15-year-old house is badly faded on the west side. |
| `AEO-CYP-EXT-BEST` | best-company shortlist | Give me a few well-regarded exterior painters in Cypress, TX and tell me what I should compare in their quotes. |
| `AEO-CYP-EXT-COST` | cost and value | What does it cost to paint the exterior of a 2,800 sq ft house in Cypress that's brick on the bottom and siding on top? |
| `AEO-CYP-EXT-CMP` | comparison | Pressure wash and repaint, or just pressure wash? How do I know if my Cypress home's exterior actually needs new paint? |
| `AEO-CYP-EXT-PROB` | problem-solving / purchase intent | Green mildew keeps coming back on the north side of our house in Cypress even after washing. Who can treat it and repaint so it doesn't return so fast? |

### Cypress: cabinet painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-CYP-CAB-REC` | recommendation | I'd like to paint my kitchen cabinets a sage green. Who in Cypress does cabinet painting with a finish that really lasts? |
| `AEO-CYP-CAB-BEST` | best-company shortlist | Which cabinet painting companies in Cypress, TX have the best reviews for a smooth sprayed finish? |
| `AEO-CYP-CAB-COST` | cost and value | Cabinet painting in Cypress: what's the price difference between painting just the doors and fronts versus the inside of the boxes too? |
| `AEO-CYP-CAB-CMP` | comparison | Is painting the kitchen cabinets in our Cypress house worth it if we'll sell in two years, or do buyers prefer the original wood? |
| `AEO-CYP-CAB-PROB` | problem-solving / purchase intent | The laundry room and bathroom cabinets in our Cypress house have swollen, peeling paint near the bottom from moisture. Can they be repaired and repainted, and who does that? |

### Cypress: drywall repair

| ID | Intent | Prompt |
|---|---|---|
| `AEO-CYP-DRY-REC` | recommendation | I need a drywall repair person in Cypress who also textures and paints. There are several patches left over from an electrical job. |
| `AEO-CYP-DRY-BEST` | best-company shortlist | Top-rated drywall repair services near Cypress, TX? I'd like a couple of options for a ceiling repair. |
| `AEO-CYP-DRY-COST` | cost and value | How much does it cost to fix a sagging drywall ceiling in a garage in Cypress? |
| `AEO-CYP-DRY-CMP` | comparison | Patch the popcorn ceiling or remove it entirely and retexture? We're in Cypress and the ceiling has a few damaged spots. |
| `AEO-CYP-DRY-PROB` | problem-solving / purchase intent | The AC condensate line overflowed in our Cypress attic and left a wet spot on the bedroom ceiling. Who can repair and repaint it once it dries out? |

### Cypress: limewash and brick finishing

| ID | Intent | Prompt |
|---|---|---|
| `AEO-CYP-LIM-REC` | recommendation | Who would you recommend in Cypress for limewash on brick? We like the whitewashed look we've seen on some houses in Towne Lake. |
| `AEO-CYP-LIM-BEST` | best-company shortlist | Best companies for limewash, German schmear or whitewashed brick in the Cypress area? |
| `AEO-CYP-LIM-COST` | cost and value | Limewash vs painting brick in Cypress: which costs more upfront, and which costs more over 10 years? |
| `AEO-CYP-LIM-CMP` | comparison | Will limewash wash off in Houston-area rain? I'm comparing limewash and silicate mineral paint for the brick on my Cypress house. |
| `AEO-CYP-LIM-PROB` | problem-solving / purchase intent | The fireplace surround in our Cypress living room is dark brick that makes the room feel small. Who can limewash or paint it so it looks intentional and not DIY? |

### Cypress: residential remodeling

| ID | Intent | Prompt |
|---|---|---|
| `AEO-CYP-REM-REC` | recommendation | We're finishing the bonus room over the garage in our Cypress house. Who would you recommend to handle the drywall, trim and paint? |
| `AEO-CYP-REM-BEST` | best-company shortlist | Shortlist of reputable home remodeling contractors in Cypress, TX for a kitchen update. |
| `AEO-CYP-REM-COST` | cost and value | What does it cost in Cypress to remodel a small half bath with a new vanity, lighting, tile and paint? |
| `AEO-CYP-REM-CMP` | comparison | Kitchen refresh (painted cabinets, new counters, new hardware) vs a full gut remodel in Cypress: what's the price difference and which makes more sense? |
| `AEO-CYP-REM-PROB` | problem-solving / purchase intent | We just bought an older house off Jones Road in Cypress that needs work in every room. How should we prioritize the remodeling, and who can take on several rooms at once? |

## Sugar Land

### Sugar Land: interior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-SUG-INT-REC` | recommendation | Can you recommend an interior painter in Sugar Land who is careful with furniture and floors? We'll be living in the house while they work. |
| `AEO-SUG-INT-BEST` | best-company shortlist | Which interior painting companies in Sugar Land, TX have the strongest reputation? Give me 3 to 5 to compare. |
| `AEO-SUG-INT-COST` | cost and value | How much does it cost to paint the interior trim, baseboards and doors in a Sugar Land house? The walls are fine. |
| `AEO-SUG-INT-CMP` | comparison | Eggshell vs satin vs matte for the main living areas in a Sugar Land home: what do painters recommend, and does it affect the price? |
| `AEO-SUG-INT-PROB` | problem-solving / purchase intent | Our Sugar Land house has cracked, yellowing oil-based paint on the trim. Who can repaint over it properly so the new paint doesn't peel? |

### Sugar Land: exterior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-SUG-EXT-REC` | recommendation | We live in First Colony and need the exterior repainted. Who would you recommend for a brick-and-siding home in Sugar Land? |
| `AEO-SUG-EXT-BEST` | best-company shortlist | Best exterior painters in Sugar Land for houses with a lot of wood trim? Short list. |
| `AEO-SUG-EXT-COST` | cost and value | How much does it cost to paint the trim and siding on a one-story brick house in Sugar Land, and how long does the job usually take? |
| `AEO-SUG-EXT-CMP` | comparison | One coat or two on an exterior repaint in Sugar Land? Some of my quotes include two coats and some don't. Which is the better value? |
| `AEO-SUG-EXT-PROB` | problem-solving / purchase intent | Our Sugar Land HOA approved new colors, but we're not sure whether repainting only the front door and shutters will look odd. Who can help pick colors and do the work? |

### Sugar Land: cabinet painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-SUG-CAB-REC` | recommendation | Who paints kitchen cabinets in Sugar Land? We want to go from cherry wood to a soft white. |
| `AEO-SUG-CAB-BEST` | best-company shortlist | Give me a shortlist of cabinet painting or refinishing companies in Sugar Land with good reviews. |
| `AEO-SUG-CAB-COST` | cost and value | What does it usually cost to paint the kitchen cabinets and island in Sugar Land, including filling the old hardware holes for new pulls? |
| `AEO-SUG-CAB-CMP` | comparison | Cabinet painting in Sugar Land: sprayed lacquer vs urethane enamel vs brushed paint. Which lasts longer in a busy family kitchen? |
| `AEO-SUG-CAB-PROB` | problem-solving / purchase intent | Grease stains around the stove keep showing through on the cabinets in our Sugar Land kitchen no matter how much I clean. Is painting the right fix, and who should do it? |

### Sugar Land: drywall repair

| ID | Intent | Prompt |
|---|---|---|
| `AEO-SUG-DRY-REC` | recommendation | I need a recommendation for drywall repair in Sugar Land: a cracked corner bead and a dent where a door handle hit the wall. |
| `AEO-SUG-DRY-BEST` | best-company shortlist | Which Sugar Land drywall repair companies are reliable for quick, small jobs? |
| `AEO-SUG-DRY-COST` | cost and value | How much does a drywall patch and repaint usually run in Sugar Land for a single room? |
| `AEO-SUG-DRY-CMP` | comparison | DIY drywall patch vs paying a pro in Sugar Land: when is hiring someone actually worth it? |
| `AEO-SUG-DRY-PROB` | problem-solving / purchase intent | A roof leak left a stained, cracked ceiling in the living room of our Sugar Land house. The roof is fixed now. Who can repair the drywall and repaint the ceiling? |

### Sugar Land: limewash and brick finishing

| ID | Intent | Prompt |
|---|---|---|
| `AEO-SUG-LIM-REC` | recommendation | Who would you recommend for limewashing brick in Sugar Land? We want a subtle, mottled look that lets some of the brick show through. |
| `AEO-SUG-LIM-BEST` | best-company shortlist | Top-rated limewash and brick finishing contractors around Sugar Land and Fort Bend County? |
| `AEO-SUG-LIM-COST` | cost and value | What would it cost to limewash the brick on a Sugar Land house and paint the trim at the same time? |
| `AEO-SUG-LIM-CMP` | comparison | Limewash vs whitewash vs painted brick: which looks best on a 1990s Sugar Land home, and which matters more for resale? |
| `AEO-SUG-LIM-PROB` | problem-solving / purchase intent | The painted brick on our Sugar Land house is peeling and seems to be trapping moisture. Can it be stripped and limewashed instead, and who does that? |

### Sugar Land: residential remodeling

| ID | Intent | Prompt |
|---|---|---|
| `AEO-SUG-REM-REC` | recommendation | We want to remodel our Sugar Land kitchen: new backsplash, new counters and fresh paint. Who would you recommend? |
| `AEO-SUG-REM-BEST` | best-company shortlist | Best home remodeling companies in Sugar Land for updating an entire house? Short list please. |
| `AEO-SUG-REM-COST` | cost and value | How much does it cost in 2026 to remodel the kitchen and two bathrooms of a 1990s home in Sugar Land? |
| `AEO-SUG-REM-CMP` | comparison | Sugar Land remodel: design-build firm vs an independent contractor. Which is better for a mid-budget project? |
| `AEO-SUG-REM-PROB` | problem-solving / purchase intent | We're getting older and want to make our Sugar Land home easier to live in, with a wider shower, grab bars and better lighting. Who does that kind of remodeling? |

## Richmond

### Richmond: interior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-RIC-INT-REC` | recommendation | Our new build in Harvest Green has flat builder paint that marks if you so much as touch it. Who in Richmond, TX can repaint with a more durable finish? |
| `AEO-RIC-INT-BEST` | best-company shortlist | Who are the best interior painting contractors in Richmond, TX? I want a few to call this week. |
| `AEO-RIC-INT-COST` | cost and value | Typical price to paint the interior of a newly built home in Richmond after we move in? Mostly walls, about 2,600 sq ft. |
| `AEO-RIC-INT-CMP` | comparison | Is it better to pay the builder for a paint upgrade before closing or hire a painter in Richmond after closing? Which ends up cheaper? |
| `AEO-RIC-INT-PROB` | problem-solving / purchase intent | Nail pops and hairline cracks are showing up all over our one-year-old house in Richmond. Should we paint now or wait, and who fixes it right? |

### Richmond: exterior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-RIC-EXT-REC` | recommendation | Can you recommend an exterior painter for an older house near historic downtown Richmond, TX? Lots of wood siding and trim. |
| `AEO-RIC-EXT-BEST` | best-company shortlist | Shortlist of reliable exterior house painters serving Richmond and Rosenberg, TX. |
| `AEO-RIC-EXT-COST` | cost and value | How much would it cost to repaint the exterior of an older wood-sided home in Richmond, TX that needs some scraping and carpentry repairs? |
| `AEO-RIC-EXT-CMP` | comparison | Elastomeric paint vs regular acrylic for the outside of a Richmond home: which do local painters recommend for our climate? |
| `AEO-RIC-EXT-PROB` | problem-solving / purchase intent | We're getting our Richmond house ready to sell and the buyer's inspector flagged peeling paint and exposed wood. Who can take care of it before closing? |

### Richmond: cabinet painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-RIC-CAB-REC` | recommendation | Who paints cabinets in Richmond, TX? Our home is newer but the cabinet color is too dark for us. |
| `AEO-RIC-CAB-BEST` | best-company shortlist | Top-rated cabinet painters near Richmond and the rest of Fort Bend County? I need a few names. |
| `AEO-RIC-CAB-COST` | cost and value | What's a fair price to paint only the bathroom vanities (three bathrooms) in Richmond, TX? |
| `AEO-RIC-CAB-CMP` | comparison | Should we paint our Richmond kitchen cabinets or just replace the doors? Which gives the better result for the cost? |
| `AEO-RIC-CAB-PROB` | problem-solving / purchase intent | The factory finish on our Richmond cabinets is already wearing through at the edges after one year. Is that normal, and who can refinish them? |

### Richmond: drywall repair

| ID | Intent | Prompt |
|---|---|---|
| `AEO-RIC-DRY-REC` | recommendation | Who does drywall repair in Richmond, TX? We have settling cracks in a few rooms. |
| `AEO-RIC-DRY-BEST` | best-company shortlist | Best drywall repair and painting companies around Richmond, TX for a whole-house touch-up? |
| `AEO-RIC-DRY-COST` | cost and value | How much does it cost to repair drywall after removing wallpaper in a Richmond house? The wall surface got torn up in spots. |
| `AEO-RIC-DRY-CMP` | comparison | After wallpaper removal, should we skim coat the whole wall or just patch the damaged spots? What do pros in Richmond recommend? |
| `AEO-RIC-DRY-PROB` | problem-solving / purchase intent | We had minor flooding near the Brazos in Richmond and the drywall in our garage got wet. Who can replace it and make it look finished again? |

### Richmond: limewash and brick finishing

| ID | Intent | Prompt |
|---|---|---|
| `AEO-RIC-LIM-REC` | recommendation | Can you recommend someone who limewashes brick near Richmond, TX? We want a classic look on a newer house in Long Meadow Farms. |
| `AEO-RIC-LIM-BEST` | best-company shortlist | Which companies near Richmond, TX are known for limewash, whitewash or German smear finishes? |
| `AEO-RIC-LIM-COST` | cost and value | Is limewash cheaper than painting brick for a home of about 2,400 sq ft in Richmond, TX? |
| `AEO-RIC-LIM-CMP` | comparison | Does limewash work the same on new brick as on older brick? We're in a newer Richmond subdivision. |
| `AEO-RIC-LIM-PROB` | problem-solving / purchase intent | The brick on our Richmond house has white chalky stains (efflorescence). Should we limewash over it or fix something first, and who can tell us? |

### Richmond: residential remodeling

| ID | Intent | Prompt |
|---|---|---|
| `AEO-RIC-REM-REC` | recommendation | Who would you recommend for a remodel in Richmond, TX? We want to convert a formal dining room into a home office with built-ins. |
| `AEO-RIC-REM-BEST` | best-company shortlist | Shortlist of remodeling contractors serving Richmond and Fulshear for kitchen and bath work. |
| `AEO-RIC-REM-COST` | cost and value | What does it cost to turn a formal dining room into an enclosed office in Richmond, TX, including a door, drywall and paint? |
| `AEO-RIC-REM-CMP` | comparison | Remodeling for resale vs remodeling for ourselves: which renovations in Richmond, TX actually pay for themselves? |
| `AEO-RIC-REM-PROB` | problem-solving / purchase intent | We want to replace the carpet, repaint and update the lighting before moving into an older Richmond house. Who can coordinate it so everything's done before move-in day? |

## Tomball

### Tomball: interior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-TOM-INT-REC` | recommendation | We're moving into an older ranch house in Tomball and want the inside repainted before we unload the truck. Who would you recommend? |
| `AEO-TOM-INT-BEST` | best-company shortlist | Give me a shortlist of interior painters serving Tomball, TX with solid reviews. |
| `AEO-TOM-INT-COST` | cost and value | How much do painters around Tomball charge to paint the interior of an 1,800 sq ft house, ceilings included? |
| `AEO-TOM-INT-CMP` | comparison | Are painters based in Tomball cheaper than companies coming up from Houston? Does it matter who I hire for interior work out here? |
| `AEO-TOM-INT-PROB` | problem-solving / purchase intent | The previous owners smoked in our Tomball house and the walls are yellow and smell. Who can seal and repaint to get rid of the stains and odor? |

### Tomball: exterior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-TOM-EXT-REC` | recommendation | Who would you recommend in Tomball for painting the exterior of a house surrounded by pine trees? Sap and constant shade are a problem. |
| `AEO-TOM-EXT-BEST` | best-company shortlist | Best exterior painting companies in Tomball, TX? Looking for a couple to quote a farmhouse-style home. |
| `AEO-TOM-EXT-COST` | cost and value | Rough cost to paint the board-and-batten siding on a farmhouse with a metal roof in Tomball, TX? |
| `AEO-TOM-EXT-CMP` | comparison | Paint vs stain for the cedar siding and wraparound porch on our Tomball house: which lasts longer and costs less over time? |
| `AEO-TOM-EXT-PROB` | problem-solving / purchase intent | Woodpeckers and moisture damaged a few spots on the siding of our Tomball house. Who repairs the wood and repaints so it matches? |

### Tomball: cabinet painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-TOM-CAB-REC` | recommendation | Who paints kitchen cabinets near Tomball, TX? I want a navy island with white perimeter cabinets. |
| `AEO-TOM-CAB-BEST` | best-company shortlist | Top cabinet painting companies around Tomball and Spring with good reviews? |
| `AEO-TOM-CAB-COST` | cost and value | How much does cabinet painting cost in Tomball compared with buying new cabinets? |
| `AEO-TOM-CAB-CMP` | comparison | Can old knotty pine cabinets in a Tomball house be painted so they look good, or is replacing them the better value? |
| `AEO-TOM-CAB-PROB` | problem-solving / purchase intent | Our 1970s kitchen cabinets in Tomball have decades of grease and old varnish on them. Can a painter prep and paint them so the finish lasts, and who should I call? |

### Tomball: drywall repair

| ID | Intent | Prompt |
|---|---|---|
| `AEO-TOM-DRY-REC` | recommendation | I need a drywall repair recommendation in Tomball for some cracks and a busted outside corner in our hallway. |
| `AEO-TOM-DRY-BEST` | best-company shortlist | Reliable drywall repair contractors in Tomball, TX? Shortlist please. |
| `AEO-TOM-DRY-COST` | cost and value | What does it cost in Tomball to repair drywall after a small leak under the kitchen sink and repaint the wall? |
| `AEO-TOM-DRY-CMP` | comparison | Repair vs replace: an older Tomball home has walls covered in old patches. Does it make more sense to keep patching or hang new drywall? |
| `AEO-TOM-DRY-PROB` | problem-solving / purchase intent | We're turning over a Tomball rental between tenants and the walls have holes, scuffs and sloppy old patches. Who can repair and repaint quickly? |

### Tomball: limewash and brick finishing

| ID | Intent | Prompt |
|---|---|---|
| `AEO-TOM-LIM-REC` | recommendation | Can you recommend someone near Tomball who does limewash on brick for a farmhouse look? |
| `AEO-TOM-LIM-BEST` | best-company shortlist | Which contractors around Tomball, TX have real experience with limewash and other brick finishes? |
| `AEO-TOM-LIM-COST` | cost and value | How much does it cost to limewash a brick fireplace and chimney in Tomball? |
| `AEO-TOM-LIM-CMP` | comparison | Limewash or painted brick for a Tomball home on a wooded lot with a lot of shade and moisture? |
| `AEO-TOM-LIM-PROB` | problem-solving / purchase intent | Our brick ranch in Tomball looks outdated and we're thinking about limewashing it before we list. Will it help it sell, and who can do it? |

### Tomball: residential remodeling

| ID | Intent | Prompt |
|---|---|---|
| `AEO-TOM-REM-REC` | recommendation | Who would you recommend in Tomball for a whole-house refresh on an older home? Drywall, paint, trim, and maybe opening up a wall. |
| `AEO-TOM-REM-BEST` | best-company shortlist | Shortlist of home remodelers serving Tomball, TX for a kitchen renovation. |
| `AEO-TOM-REM-COST` | cost and value | What's a realistic 2026 budget for updating a 1980s home in Tomball: paint, flooring and a kitchen refresh? |
| `AEO-TOM-REM-CMP` | comparison | Tomball remodel: hire a general contractor, or have a painting and drywall company do the finish work and manage the rest myself? |
| `AEO-TOM-REM-PROB` | problem-solving / purchase intent | We inherited an older family house in Tomball that needs updating before we can live in it or sell it. Where do we start, and who can do the work? |

## Fulshear

### Fulshear: interior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-FUL-INT-REC` | recommendation | Can you recommend an interior painter in Fulshear for our new home in Cross Creek Ranch? The builder's paint is thin and patchy. |
| `AEO-FUL-INT-BEST` | best-company shortlist | Who are the most reputable interior painters in Fulshear, TX? Give me a short list. |
| `AEO-FUL-INT-COST` | cost and value | How much would it cost to paint a few accent walls and a two-story living room in Fulshear? |
| `AEO-FUL-INT-CMP` | comparison | Hire a painter for the whole Fulshear house at once, or do a few rooms at a time? Which is better on price and disruption? |
| `AEO-FUL-INT-PROB` | problem-solving / purchase intent | Builder touch-ups in our Fulshear house left shiny patches all over the walls that show in the afternoon light. Who can fix it so the walls look even? |

### Fulshear: exterior painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-FUL-EXT-REC` | recommendation | Who would you recommend for exterior painting in Fulshear? Our house is only 8 years old but the trim is already chalky. |
| `AEO-FUL-EXT-BEST` | best-company shortlist | Best exterior house painters serving Fulshear and Katy for HOA-approved color changes? |
| `AEO-FUL-EXT-COST` | cost and value | What's the cost to repaint the exterior of a 3,500 sq ft home in Fulshear that has stone, brick and Hardie siding? |
| `AEO-FUL-EXT-CMP` | comparison | Is it worth paying for premium exterior paint with Fulshear's sun and humidity, or is a mid-grade paint fine? |
| `AEO-FUL-EXT-PROB` | problem-solving / purchase intent | Our Fulshear house exterior was painted three years ago and it's already peeling near the gutters. Who can figure out why and fix it properly? |

### Fulshear: cabinet painting

| ID | Intent | Prompt |
|---|---|---|
| `AEO-FUL-CAB-REC` | recommendation | Who paints cabinets in Fulshear? Our kitchen is fairly new, but we want greige instead of the espresso stain. |
| `AEO-FUL-CAB-BEST` | best-company shortlist | Give me a few cabinet painting companies around Fulshear and Katy that do sprayed finishes. |
| `AEO-FUL-CAB-COST` | cost and value | How much does it cost in Fulshear to paint a large kitchen with an island and a butler's pantry? |
| `AEO-FUL-CAB-CMP` | comparison | Painting dark builder cabinets a lighter color in a newer Fulshear home: is it worth it, or will it look worse than the factory finish? |
| `AEO-FUL-CAB-PROB` | problem-solving / purchase intent | We just bought a newer Fulshear home with dark cabinets that make the kitchen feel like a cave. What's the fastest way to brighten it up, and who does that? |

### Fulshear: drywall repair

| ID | Intent | Prompt |
|---|---|---|
| `AEO-FUL-DRY-REC` | recommendation | Who does drywall repair in Fulshear? We want new-construction cracks fixed before our builder warranty runs out. |
| `AEO-FUL-DRY-BEST` | best-company shortlist | Top drywall repair and paint companies serving Fulshear, TX? |
| `AEO-FUL-DRY-COST` | cost and value | How much does it cost to fix drywall cracks and nail pops throughout a two-year-old house in Fulshear? |
| `AEO-FUL-DRY-CMP` | comparison | Make the builder fix the drywall cracks in our Fulshear home under warranty, or hire someone ourselves? What are the pros and cons? |
| `AEO-FUL-DRY-PROB` | problem-solving / purchase intent | We mounted a TV over the fireplace in our Fulshear home and then moved it, and now there are big holes and anchor damage. Who can patch and paint it seamlessly? |

### Fulshear: limewash and brick finishing

| ID | Intent | Prompt |
|---|---|---|
| `AEO-FUL-LIM-REC` | recommendation | Can you recommend a contractor for limewash on a newer brick home in Fulshear? Our HOA allows it but wants to approve it first. |
| `AEO-FUL-LIM-BEST` | best-company shortlist | Who does high-quality limewash or whitewashed brick in the Fulshear area? |
| `AEO-FUL-LIM-COST` | cost and value | What's the price range to limewash the front of a two-story brick house in Fulshear? |
| `AEO-FUL-LIM-CMP` | comparison | Limewash vs painted brick on a new house in Fulshear: which one is reversible, and which fits a modern farmhouse style better? |
| `AEO-FUL-LIM-PROB` | problem-solving / purchase intent | The brick color on our Fulshear house clashes with the stone the builder used. Can limewash tie them together, and who can show us samples on our wall? |

### Fulshear: residential remodeling

| ID | Intent | Prompt |
|---|---|---|
| `AEO-FUL-REM-REC` | recommendation | We want to add built-ins, shiplap and new lighting to our living room in Fulshear. Who would you recommend? |
| `AEO-FUL-REM-BEST` | best-company shortlist | Shortlist of residential remodelers in Fulshear for upgrading a builder-grade home. |
| `AEO-FUL-REM-COST` | cost and value | What's a typical cost to upgrade a builder-grade home in Fulshear with new trim, paint, lighting and bathroom vanities? |
| `AEO-FUL-REM-CMP` | comparison | Builder upgrades during construction vs remodeling after closing in Fulshear: which is cheaper, and which gets better quality? |
| `AEO-FUL-REM-PROB` | problem-solving / purchase intent | We just moved into a new build in Fulshear and want a home office with a door, built-ins and paint. Who can do it without causing problems with the builder warranty? |

