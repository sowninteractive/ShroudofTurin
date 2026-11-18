// Evidence content for the compendium. Edit entries here; the page renders them automatically.

export interface EvidencePoint {
  num: number;
  title: string;
  categoryGroup: string;
  categoryLabel: string;
  summary: string;
  detail: string;
  scripture?: string;
  source: string;
  sourceUrl?: string;
  highlightTag?: string;
  sourceLabel?: string;
  contestedNote?: string;
  relatedLinks?: { label: string; url: string }[];
}

export const evidenceList: EvidencePoint[] = [
  // SECTION: PHYSICAL, TEXTILE & 3D OPTICS
  {
    num: 1,
    title: "Physical Dimensions & Ancient 3:1 Herringbone Weave",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Textile Architecture",
    highlightTag: "Linen Specs",
    summary: "Ancient Syrian twill linen measuring 4.4 × 1.1 meters with Z-twist yarn matching 1st-century Judaean textile techniques.",
    detail:
      "The Shroud of Turin is an ancient linen cloth measuring approximately 4.4 meters long and 1.1 meters wide (corresponding to 8 × 2 ancient Syrian cubits). Woven in a sophisticated 3:1 herringbone twill from hand-spun flax with a Z-twist, it carries faint sepia frontal and dorsal images of a brutally crucified man. The textile displays historical stitching matching 1st-century Masada fabric specimens rather than medieval European looms.",
    source: "Shroud.com, STURP Scientific Records & Textile Archaeology",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "STURP Papers Index",
    relatedLinks: [{ label: "2026 textile analysis (npj Heritage Science)", url: "https://www.nature.com/articles/s40494-026-02530-7" }]
  },
  {
    num: 2,
    title: "Photographic Negative Discovery (Secondo Pia, 1898)",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Optics & Photography",
    highlightTag: "Photographic Negative",
    summary: "The cloth behaves as a true optical negative—revealing lifelike realism, illumination, and anatomical depth only when inverted.",
    detail:
      "In May 1898, Italian photographer Secondo Pia photographed the Shroud during a public exposition. In his darkroom developer, the glass plate negative revealed a startling lifelike positive portrait with natural lighting, anatomical depth, and photographic perfection. The cloth itself functions optically as a photographic negative produced centuries before optics, camera obscura, or photo-chemistry were conceived.",
    source: "Secondo Pia Archives & Shroud.com",
    sourceUrl: "https://en.wikipedia.org/wiki/Shroud_of_Turin",
    sourceLabel: "Read Background Overview"
  },
  {
    num: 3,
    title: "True 3D Topographic Information Encoded in Image Intensity",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "NASA VP-8 Spatial Mapping",
    highlightTag: "NASA VP-8 3D Relief",
    summary: "Unlike ordinary photographs or paintings, the Shroud contains mathematical distance data (I = f(d)) producing an undistorted 3D body relief.",
    detail:
      "Scientists John Jackson, Eric Jumper, and William Ercoline examined the Shroud using a NASA VP-8 Image Analyzer. Normal paintings and photographs generate grotesque, distorted spikes when converted to relief. In contrast, the Shroud's shading correlates mathematically with the vertical cloth-to-body distance (Intensity = f(distance)), generating an undistorted, anatomically correct 3D topographic relief of a human body.",
    source: "Jackson, J. P., Jumper, E. J., and Ercoline, W. R. (1984), Applied Optics 23: 2244–2270",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "Find Paper in STURP Index"
  },
  {
    num: 4,
    title: "Sub-Micron Surface Coloration (Zero Capillary Flow)",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Microfiber Physics",
    highlightTag: "0.2 Micron Depth",
    summary: "The image resides exclusively on the primary cell wall of individual linen fibrils (0.2–0.5 µm thick) with no paint, binder, or bleed-through.",
    detail:
      "Electron microscopy demonstrated that the sepia coloration is strictly confined to the outermost primary cell wall of linen fibrils—a skin only 0.2 to 0.5 micrometers thick. The interior core of the thread remains pure white linen. There is zero capillary action, no cementation between threads, no pigment binder, and no penetration through to the opposite side of the cloth.",
    source: "STURP Scientific Papers, Analytica Chimica Acta (1982)",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "Find Paper in STURP Index"
  },
  {
    num: 5,
    title: "STURP's 1978 Direct Multidisciplinary Investigation",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Multidisciplinary Science",
    highlightTag: "STURP 1978 Findings",
    summary: "30+ American scientists spent 120 continuous hours testing the cloth; no paints, dyes, pigments, or medieval artistic media were detected.",
    detail:
      "The Shroud of Turin Research Project (STURP) team spent 120 continuous hours directly examining the relic using UV/visible spectroscopy, X-ray fluorescence, thermography, infrared radiography, and microchemistry. Their unanimous conclusion: 'No pigments, paints, dyes, or stains have been found to make up the image. The image is an ongoing mystery.'",
    source: "STURP Official Final Scientific Reports (1978–1981)",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "STURP Papers Index"
  },
  {
    num: 6,
    title: "Atypical Textile Construction Reported in 2026 Fragment Analysis",
    categoryGroup: "Optics & Physical Properties",
    categoryLabel: "Textile Analysis",
    highlightTag: "2026 npj Heritage Science",
    summary: "A 2026 peer-reviewed textile analysis of fragments retained from the 1988 sampling describes the Shroud's combination of 3/1 twill, z-twist yarn and thread density as highly atypical.",
    detail:
      "In 2026, Rachel Freer-Waters and A. J. Timothy Jull published a textile analysis of two fragments retained from the 1988 sampling at the University of Arizona, comparing them with control cloths distributed to the radiocarbon laboratories. They found the fragments consistent with other published descriptions of the main Shroud cloth, and described the combination of warp and weft density, z-twist yarn and 3/1 twill structure as highly atypical and worthy of further study.",
    contestedNote: "The same paper reports no evidence of contamination in the dated fragments, which bears against the repair hypothesis discussed in the radiocarbon-challenge entry. Atypical construction by itself does not establish the cloth's date.",
    source: "Freer-Waters, R. & Jull, A. J. T. (2026), npj Heritage Science 14: 263",
    sourceUrl: "https://www.nature.com/articles/s40494-026-02530-7",
    sourceLabel: "Read 2026 Study"
  },
  // SECTION: BIOCHEMISTRY & SEROLOGY
  {
    num: 7,
    title: "Real Human Hemoglobin, Albumin & Bilirubin",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Biochemistry & Serology",
    highlightTag: "Authentic Human Blood",
    summary: "Biochemical testing identified porphyrin, hemochromogen, bile pigments, and fluorescent serum halos surrounding true blood clots.",
    detail:
      "Biochemists John Heller and Alan Adler proved the stains were genuine human blood. Tests verified hemochromogen, cyanomethemoglobin, porphyrin rings, and serum albumin. Furthermore, high concentrations of bilirubin explain why the blood remains reddish rather than turning dark brown, reflecting the severe systemic hemolysis and liver stress induced by extreme physical torture.",
    source: "Heller, J. H., and Adler, A. D. (1980), Applied Optics 19(16): 2742–2744",
    sourceUrl: "https://www.shroud.com/pdfs/ssi43part2.pdf",
    sourceLabel: "Read Heller & Adler (1980)"
  },
  {
    num: 8,
    title: "Bloodstains Preceded Image Formation (Natural Masking)",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Spectroscopy & Layering",
    highlightTag: "Blood First, Image Second",
    summary: "UV fluorescence shows blood crusts were transferred to the cloth first, shielding the fibers beneath from image coloration.",
    detail:
      "When blood crusts are digested with proteolytic enzymes, the linen fibrils beneath are completely uncolored and pristine. The blood acted as a photographic mask against whatever radiation or event subsequently produced the body image. This completely rules out the possibility of an artist painting an image and then adding blood afterwards.",
    source: "Pellicori, R. (1980), Applied Optics 19(12): 1913–1920",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "Find Paper in STURP Index",
    relatedLinks: [{ label: "Jumper et al. (1984), stains and images", url: "https://shroud.com/pdfs/Comprehensive%20Exam%20of%20Stains%20Jumper%20et%20al%201984%20OCR.pdf" }]
  },
  {
    num: 9,
    title: "Roman Flagrum Scourge Marks (Dual Executioners)",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Trauma",
    highlightTag: "120+ Scourge Contusions",
    summary: "Over 120 dumbbell-shaped contusions matching the Roman flagrum taxillatum struck from two distinct angles and heights.",
    detail:
      "Forensic pathologists identified 100 to 120 dumbbell-shaped contusions distributed across the shoulders, back, chest, and legs. Each mark matches the paired lead dumbbell weights (plumbatae) of a Roman flagrum taxillatum. Trajectory modeling shows two executioners standing on either side of the victim, one taller than the other, striking with systematic brutality.",
    scripture: "Matthew 27:26; Mark 15:15; John 19:1",
    source: "STURP Scientific Papers & 2023 Forensic Bloodstain-Pattern Research",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "STURP Papers Index"
  },
  {
    num: 10,
    title: "Scalp & Forehead Puncture Wounds (Helmet of Thorns)",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Cranial Forensics",
    highlightTag: "Helmet of Thorns",
    summary: "Over 30 puncture wounds penetrating the scalp, with an inverted '3' blood rivulet matching brow contractions during extreme agony.",
    detail:
      "The head exhibits over 30 separate puncture wounds across the scalp, forehead, and occiput, consistent with a cap or helmet of thorns rather than a decorative wreath. A prominent arterial blood rivulet on the forehead flows down in the shape of an inverted '3', perfectly conforming to the natural skin creases produced when brow muscles contract in severe pain.",
    scripture: "Matthew 27:29; Mark 15:17; John 19:2",
    source: "STURP Forensic Papers & Legal Medicine Annual",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "STURP Papers Index"
  },
  {
    num: 11,
    title: "Destot's Space Wrist Nailing & Median Nerve Retraction",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Biomechanics & Anatomy",
    highlightTag: "Wrist Puncture & Thumbs",
    summary: "Nails driven through Destot's space in the wrist (not the palm), severing the median nerve and causing involuntary thumb retraction.",
    detail:
      "Medieval art universally depicted nails through the palms of the hands—an anatomical impossibility, as palm tissue tears under body weight. The Shroud reveals nail entry through Destot's space in the wrists. Furthermore, both thumbs are retracted inwards beneath the palms, an involuntary reflex caused when the heavy iron spike lacerates the motor branch of the median nerve.",
    source: "Barbet, P. (1953) A Doctor at Calvary & Zugibe, F. (2005)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/3512867/",
    sourceLabel: "Medical Background (JAMA, 1986)"
  },
  {
    num: 12,
    title: "Crucifixion Foot Nail Exit & Asphyxial Posture",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Pathology",
    highlightTag: "Single Iron Spike",
    summary: "Left foot placed directly over the right foot, pinned by a single spike into the cross, revealing rigor mortis frozen at death.",
    detail:
      "The lower dorsal and frontal images show an exit wound from an iron spike through the tarsus of the feet. Blood runoff angles demonstrate that the victim had to repeatedly push upward against the foot nail to exhale and relieve asphyxiation, matching the horrific clinical physiology of Roman crucifixion.",
    scripture: "Matthew 27:35; Luke 23:33; John 19:18",
    source: "Forensic Pathology Archives & Zugibe Anatomical Studies",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/3512867/",
    sourceLabel: "Medical Background (JAMA, 1986)"
  },
  {
    num: 13,
    title: "The Postmortem Side Lance Wound & Serous Effusion",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Pathology",
    highlightTag: "Blood & Water (John 19:34)",
    summary: "A 4.4 × 1.1 cm transverse oval puncture between the 5th and 6th ribs with dual flow of separated clotted blood and clear pericardial fluid.",
    detail:
      "A transverse oval wound measuring 4.4 × 1.1 cm appears on the right chest between the fifth and sixth ribs, exactly conforming to the dimensions of a Roman lancea. A massive outflow of separated heavy clotted blood and clear serous fluid (pleural and pericardial fluid) drained downwards across the chest and back—the clinical reality of 'blood and water.'",
    scripture: "John 19:34",
    source: "STURP Medical Studies & Journal of the American Medical Association (JAMA)",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/3512867/",
    sourceLabel: "Read JAMA Article (PubMed)"
  },
  {
    num: 14,
    title: "Rigid Postmortem Rigor Mortis Frozen at Death",
    categoryGroup: "Blood & Forensic Pathology",
    categoryLabel: "Forensic Pathology",
    highlightTag: "Agonic Rigor Mortis",
    summary: "Thoracic cage expansion, neck tilt, and stiff knee flexion preserved without bodily decomposition or putrefaction gases.",
    detail:
      "The anatomical imprint demonstrates unmistakable signs of acute rigor mortis setting in instantly at the moment of violent asphyxial death. The rib cage is frozen in full inspiratory distension, and the knees remain slightly flexed. Most crucially, there are zero signs of body decomposition or bacterial putrefaction, indicating the body departed the cloth within approximately 36 to 40 hours.",
    source: "STURP Forensic Papers & Forensic Science International",
    sourceUrl: "https://shroud.com/78papers.htm",
    sourceLabel: "STURP Papers Index"
  },
  // SECTION: MODERN LASER PHYSICS & ATOMIC DATING
  {
    num: 15,
    title: "ENEA Vacuum-Ultraviolet Laser Experiments on Linen",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Quantum Laser Physics",
    highlightTag: "ENEA Laser Experiments",
    summary: "ENEA researchers reproduced the Shroud's ultra-thin, yellowed coloration on small linen samples using extremely short pulses of vacuum ultraviolet light.",
    detail:
      "Between 2005 and 2013, physicists at ENEA's research centre in Frascati irradiated linen with excimer lasers, varying pulse length, intensity and pulse count. Longer ultraviolet pulses (about 120 ns) failed to colour the cloth or carbonized it, but 193-nm vacuum-ultraviolet pulses lasting about 12 ns produced a faint yellowing confined to the outermost fibre layer, with a hue close to the Shroud image, and only within a narrow window of settings. Lead author Paolo Di Lazzaro stresses that this identifies a physical mechanism able to produce Shroud-like colour, not proof that the image was made by a laser, and that the work does not address when the image formed.",
    contestedNote: "ENEA coloured only small areas of linen, and only within a narrow range of settings; the full-body image was not reproduced. Di Lazzaro also notes that other processes, such as electrons from a corona discharge, have produced shroud-like coloration at the microscopic level.",
    source: "Baldacchini, Di Lazzaro, Murra & Fanti (2008), Applied Optics 47(9); Di Lazzaro et al. (2012), Applied Optics 51; Di Lazzaro & Murra (2015), SHS Web of Conferences 15",
    sourceUrl: "https://www.shs-conferences.org/articles/shsconf/pdf/2015/02/shsconf_atsi2014_00005.pdf",
    sourceLabel: "Read ENEA Paper (open access)",
    relatedLinks: [{ label: "National Geographic (2015)", url: "https://www.nationalgeographic.com/history/article/150417-shroud-turin-relics-jesus-catholic-church-religion-science" }]
  },
  {
    num: 16,
    title: "Radiant Energy Requirement: About 34 Trillion Watts of Light",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Quantum Laser Physics",
    highlightTag: "3.4 × 10¹³ W",
    summary: "ENEA's scaling of its lab results to a whole-body image gives a required vacuum-UV flash of roughly 34 trillion watts, beyond any ultraviolet source available today.",
    detail:
      "In the ENEA experiments, Shroud-like colouring appeared only with very short, very intense vacuum-ultraviolet pulses (billions of watts per pulse over a few square centimetres, lasting well under 40 billionths of a second). Scaling those conditions up to colour a surface the size of a human body, front and back, gives an estimated peak power of roughly 34 trillion watts (about 3.4 × 10¹³ W). Di Lazzaro states that this exceeds the maximum power of all ultraviolet sources available today, which is why ENEA concludes no single laser could reproduce the whole image. The figure is a measure of how demanding the image is to replicate, not a demonstration of how it formed.",
    contestedNote: "The estimate comes from scaling small-area lab results up to a full body, and ENEA stresses it does not show the image was produced by light or a laser. Other researchers favour contact or chemical image-forming processes that would not need such energy.",
    source: "Di Lazzaro et al., ENEA Frascati report (2011); Di Lazzaro, quoted in National Geographic (2015)",
    sourceUrl: "https://www.nationalgeographic.com/history/article/150417-shroud-turin-relics-jesus-catholic-church-religion-science",
    sourceLabel: "Read National Geographic Report",
    relatedLinks: [{ label: "ENEA research survey (open access)", url: "https://www.shs-conferences.org/articles/shsconf/pdf/2015/02/shsconf_atsi2014_00005.pdf" }, { label: "Sci-News summary", url: "https://www.sci.news/physics/scientists-suggest-turin-shroud-authentic.html" }]
  },
  {
    num: 17,
    title: "No Laboratory Has Reproduced the Full-Body Image",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Replication Attempts",
    highlightTag: "Unreplicated",
    summary: "Even ENEA's best results colour only a few square centimetres, and Di Lazzaro states that every scientific attempt to replicate the full image has failed so far.",
    detail:
      "ENEA could approximate the Shroud's colour, thinness and lack of fluorescence only on small linen patches under tightly controlled conditions. In 2015, Paolo Di Lazzaro told National Geographic that every scientific attempt to reproduce the image in a laboratory has failed, and reasoned that if modern technology cannot make a facsimile, a medieval forger succeeding seems hard to imagine. The energy requirement estimated by ENEA is one reason a full-body reproduction remains out of reach.",
    contestedNote: "Skeptical researchers have produced copies using rubbing and other medieval-style techniques that reproduce some of the Shroud's features, and researchers disagree about how closely such copies match.",
    source: "Di Lazzaro, quoted in National Geographic (2015); Di Lazzaro & Murra (2015), SHS Web of Conferences 15",
    sourceUrl: "https://www.nationalgeographic.com/history/article/150417-shroud-turin-relics-jesus-catholic-church-religion-science",
    sourceLabel: "Read National Geographic Report",
    relatedLinks: [{ label: "ENEA research survey (open access)", url: "https://www.shs-conferences.org/articles/shsconf/pdf/2015/02/shsconf_atsi2014_00005.pdf" }]
  },
  {
    num: 18,
    title: "Wide-Angle X-ray Scattering (WAXS) Dating of a Shroud Thread (2022)",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Cellulose Crystallography",
    highlightTag: "2022 WAXS Study",
    summary: "A 2022 peer-reviewed X-ray study of one thread taken near the 1988 sampling corner found cellulose ageing far older than seven centuries, resembling first-century Masada linen.",
    detail:
      "In 2022, Liberato De Caro and colleagues at Italy's National Research Council applied Wide-Angle X-ray Scattering to a single thread taken near the corner used for radiocarbon dating. Their analysis of cellulose structural ageing indicated a cloth much older than the roughly seven centuries implied by the 1988 date, with a profile similar to linen from Masada, Israel (55–74 AD). The authors describe the method as new and propose repeating it on more samples from different parts of the cloth in several laboratories.",
    contestedNote: "The result rests on one thread and a recently developed technique. Independent measurements on additional samples are still needed, as the authors themselves propose.",
    source: "De Caro, L., Sibillano, T., Lassandro, R., Giannini, C. & Fanti, G. (2022), Heritage 5(2): 860–870",
    sourceUrl: "https://www.mdpi.com/2571-9408/5/2/47",
    sourceLabel: "Read Original Study"
  },
  {
    num: 19,
    title: "Spectroscopic Aging Studies (FTIR & Raman) Point to an Earlier Date",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Spectroscopic Dating",
    highlightTag: "FTIR / Raman",
    summary: "A research group led by Giulio Fanti reported FTIR and Raman spectroscopy age estimates centred before the Christian era, though with very large error margins.",
    detail:
      "The introduction to the 2022 WAXS paper summarizes earlier dating attempts by the same group: FTIR/ATR spectroscopy gave an estimate of 300 BC ± 400 years and Raman spectroscopy gave 200 BC ± 500 years, both far from the 1260–1390 AD radiocarbon range. A mechanical-properties approach was also proposed. De Caro's team suggests further measurements by several laboratories on samples from different parts of the cloth to confirm these indications.",
    contestedNote: "These estimates come from one research group and carry margins of four to five centuries. They have not displaced the 1988 radiocarbon result in mainstream dating.",
    source: "De Caro, L. et al. (2022), Heritage 5(2): 860–870, introduction and references",
    sourceUrl: "https://www.mdpi.com/2571-9408/5/2/47",
    sourceLabel: "Read Original Study"
  },
  {
    num: 20,
    title: "Challenges to the 1988 Radiocarbon Date: Rogers' Repair Hypothesis",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Radiocarbon Re-Evaluation",
    highlightTag: "1988 C-14 Disputed",
    summary: "Chemist Raymond Rogers argued the 1988 sample came from a later repair containing cotton and dye; later studies of the retained fragments dispute this.",
    detail:
      "Raymond Rogers, a former STURP chemist at Los Alamos, reported in 2005 that threads from the radiocarbon sample area showed cotton fibres and a dye coating not seen elsewhere on the cloth, and concluded the sample was not part of the original linen. From the slow loss of vanillin from the flax lignin he also estimated an age of roughly 1,300 to 3,000 years. Repairs to the Shroud after the 1532 Chambéry fire are documented in 1534 and 1694.",
    contestedNote: "Rogers' conclusions are disputed. In 2010 Freer-Waters and Jull examined a retained piece of the Arizona sample and found nothing to contradict its coming from the main cloth, attributing stray cotton fibres to possible contamination from handling and storage. A 2026 analysis of two retained fragments likewise reported consistency with the main Shroud and no sign of contamination. The 1988 date (1260–1390 AD) remains the most widely cited scientific result.",
    source: "Rogers, R. N. (2005), Thermochimica Acta 425: 189–194",
    sourceUrl: "https://doi.org/10.1016/j.tca.2004.09.029",
    sourceLabel: "Read Original Study",
    relatedLinks: [{ label: "Freer-Waters & Jull (2010), Radiocarbon", url: "https://journals.uair.arizona.edu/index.php/radiocarbon/article/download/3419/3757" }, { label: "Freer-Waters & Jull (2026)", url: "https://www.nature.com/articles/s40494-026-02530-7" }, { label: "Nature news analysis (2005)", url: "https://www.nature.com/articles/news050124-17" }]
  },
  {
    num: 21,
    title: "Statistical Heterogeneity in the 1988 Radiocarbon Raw Data (2019)",
    categoryGroup: "Modern Laser Physics & Dating",
    categoryLabel: "Statistical Re-analysis",
    highlightTag: "Raw Data Re-analysis",
    summary: "Raw 1988 laboratory data, released only after a legal request, show statistically significant variation between measurements, leading the authors to call for re-dating.",
    detail:
      "After the British Museum released the 1988 raw measurements in 2017 in response to a legal request, Tristan Casabianca and colleagues re-examined them in Archaeometry (2019). Applying standard homogeneity tests, they found the Arizona laboratory's measurements were more variable than expected from a uniform piece of cloth, and concluded that the published 1260–1390 AD range cannot be treated as conclusive. They did not propose a replacement date, and recommended new multidisciplinary sampling instead.",
    contestedNote: "The 1988 result (1260–1390 AD) remains the most widely cited scientific dating of the cloth, and the 2019 authors themselves call for new testing rather than offering a replacement date.",
    source: "Casabianca, T., Marinelli, E., Pernagallo, G. & Torrisi, B. (2019), Archaeometry 61(5): 1223–1231",
    sourceUrl: "https://doi.org/10.1111/arcm.12467",
    sourceLabel: "Read Original Study",
    relatedLinks: [{ label: "Open-access preprint", url: "https://philarchive.org/archive/CASTRD-3" }, { label: "Original 1988 Nature paper", url: "https://www.nature.com/articles/337611a0" }]
  },
  // SECTION: GENOMICS, BOTANY & ARCHAEOLOGY
  {
    num: 22,
    title: "Human & Plant DNA from Shroud Dust (2015 & 2026 Studies)",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Genomics & Lineages",
    highlightTag: "Scientific Reports DNA",
    summary: "Two Scientific Reports studies recovered DNA from many human lineages and plant species, evidence of long handling and travel rather than a clear date or origin.",
    detail:
      "In 2015, Gianni Barcaccia's team sequenced DNA from dust vacuumed off the Shroud and found plant species from the Mediterranean, Asia, the Middle East and the Americas, plus human mitochondrial lineages from several Western Eurasian groups, including some typical of the Near East and India. The authors said this diversity fits the Shroud's long journey from the Near East but does not exclude a medieval European origin, and they even raised the possibility of Indian linen manufacture. A 2026 follow-up applying PCR-free metagenomic sequencing to the official 1978 samples likewise concluded that DNA alone cannot date the cloth.",
    contestedNote: "Neither study can establish the cloth's age or origin. Reporting on the 2026 study describes the animal and microbial DNA as leaning Mediterranean and European, no ancient proteins were found, and the clearest human profile matched a researcher who handled the 1978 samples.",
    source: "Barcaccia, G. et al. (2015), Scientific Reports 5:14484; Barcaccia, G. et al. (2026), Scientific Reports 16",
    sourceUrl: "https://www.nature.com/articles/srep14484",
    sourceLabel: "Read 2015 Study",
    relatedLinks: [{ label: "2026 follow-up study", url: "https://doi.org/10.1038/s41598-026-60684-7" }, { label: "Phys.org summary (2026)", url: "https://phys.org/news/2026-07-shroud-turin-dna-biological-history.html" }]
  },
  {
    num: 23,
    title: "Pollen & Plant Imagery on the Shroud (Frei, Danin, Baruch)",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Botanical Palynology",
    highlightTag: "Disputed Botany",
    summary: "Max Frei's sticky-tape samples and later work by Avinoam Danin and Uri Baruch were reported to show pollen from Near Eastern plants such as Gundelia tournefortii; the identifications are disputed.",
    detail:
      "Swiss criminologist Max Frei collected pollen from the Shroud in 1973 and 1978. Israeli botanist Avinoam Danin and palynologist Uri Baruch later reported that a large share of the grains they examined matched Gundelia tournefortii, a thistle that blooms around Jerusalem in spring, and that some plant images on the cloth pointed to the Jerusalem–Hebron area. In 2017, Marzia Boi published an Archaeometry study offering a different reading, proposing that the pollen mostly comes from insect-pollinated plants such as members of the Asteraceae (rather than Gundelia), Cistus, Ferula and Pistacia, consistent with anointing and embalming.",
    scripture: "John 19:39–40",
    contestedNote: "Palynologist Vaughn Bryant, reviewing the Danin and Baruch work, argued that Gundelia cannot be reliably identified by light microscopy alone. Pollen can also arrive by wind, handling or travel, so it speaks to exposure, not to the cloth's age.",
    source: "Danin, A. & Baruch, U. (1998–1999); Boi, M. (2017), Archaeometry 59(2): 316–330",
    sourceUrl: "https://www.shroud.com/danin2.htm",
    sourceLabel: "Read Danin's Paper"
  },
  {
    num: 24,
    title: "Limestone Dust Matching Jerusalem Tombs (Aragonite)",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Archaeological Mineralogy",
    highlightTag: "Jerusalem Rock Aragonite",
    summary: "Microscopic limestone particles from the Shroud's foot region were reported to be aragonite with traces of strontium and iron, resembling limestone from a Jerusalem tomb.",
    detail:
      "Optical crystallographer Joseph Kohlbeck and archaeologist Eugenia Nitowski reported that tiny dirt particles taken from the Shroud's foot area were travertine aragonite, a less common form of calcium carbonate, with small amounts of strontium and iron. Their comparison samples from a Jerusalem tomb showed the same signature, and physicist Riccardo Levi-Setti's mass-spectrometry comparison supported the match. They argued that anyone proposing a forgery would need to explain how this material reached the cloth.",
    contestedNote: "Kohlbeck himself acknowledged that the match is suggestive and does not prove the dirt could only have come from a Jerusalem tomb. The BAS Library article may require a free or paid membership.",
    source: "Kohlbeck, J. A. & Nitowski, E. L. (1986), Biblical Archaeology Review 12(4): 18–29",
    sourceUrl: "https://library.biblicalarchaeology.org/article/new-evidence-may-explain-image-on-shroud-of-turin",
    sourceLabel: "Read Article (BAS Library)"
  },
  {
    num: 25,
    title: "Recent 2025–2026 Peer-Reviewed Research on the Shroud",
    categoryGroup: "Genomics & Archaeology",
    categoryLabel: "Contemporary Research",
    highlightTag: "2025–2026 Studies",
    summary: "New studies on DNA, retained 1988 fragments and the sequence of blood and image add data points, but do not settle the cloth's age.",
    detail:
      "Recent work includes a 2026 Scientific Reports metagenomic study of the official 1978 samples; an April 2026 npj Heritage Science textile analysis of fragments retained from the 1988 radiocarbon sampling, which found them consistent with the main cloth and called its weave combination highly atypical; and experiments by Kelly Kearse in the International Journal of Archaeology (2025–2026) on how blood and image-forming chemistry interact. One of Kearse's findings is that blood applied to acid-treated linen prevents later coloration, which offers an experimental model for the lack of image beneath the bloodstains.",
    contestedNote: "These studies refine the picture rather than settle it. As summaries of the 2026 DNA study put it, the findings do not prove the cloth's age or authenticity.",
    source: "Barcaccia et al. (2026), Scientific Reports 16; Freer-Waters & Jull (2026), npj Heritage Science 14: 263; Kearse (2025–2026), International Journal of Archaeology",
    sourceUrl: "https://www.nature.com/articles/s40494-026-02530-7",
    sourceLabel: "Read 2026 Textile Study",
    relatedLinks: [{ label: "Kearse (2026), blood and image sequence", url: "https://www.sciencepublishinggroup.com/article/10.11648/j.ija.20261402.11" }, { label: "Barcaccia et al. (2026), DNA", url: "https://doi.org/10.1038/s41598-026-60684-7" }]
  },
  // SECTION: HISTORICAL TRAIL & THE MANDYLION
  {
    num: 26,
    title: "The Historical Mandylion of Edessa ('Tetradiplon')",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "Byzantine Historical Records",
    highlightTag: "Folded in Eight Layers",
    summary: "6th-century texts record an acheiropoieton cloth folded 'tetradiplon' (in four twice) exposing only the sacred face of Jesus in a frame.",
    detail:
      "Ancient Christian records from the 6th century describe the Image of Edessa (Mandylion) as an 'acheiropoieton' ('not made by human hands') image of Christ on linen. The Acts of Thaddaeus uses the unique Greek word 'tetradiplon' (doubled four times = 8 folds). When the 4.4-meter Shroud is folded in eight layers, only the majestic face of Christ remains visible within a rectangular opening.",
    contestedNote: "Whether the Mandylion was the Shroud is debated. Most early accounts describe a face-only image, and historians such as Averil Cameron reject the identification.",
    source: "Acts of Thaddaeus & Ian Wilson (1978)",
    sourceUrl: "https://www.shroud.com/pdfs/scavone.pdf",
    sourceLabel: "Read Scavone's Study"
  },
  {
    num: 27,
    title: "Archdeacon Gregory's 944 AD Constantinople Homily",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "Byzantine Homiletics",
    highlightTag: "Vatican MS gr. 511",
    summary: "Archdeacon Gregory delivered an official imperial sermon explicitly describing that the Edessa cloth showed Christ's full body, side wound, and blood.",
    detail:
      "On August 16, 944 AD, the Byzantine Empire brought the holy cloth into Constantinople with imperial pomp. Archdeacon Gregory the Referendarius gave an official sermon (preserved in Vatican Codex Graecus 511) explicitly recording that the cloth was not merely a face portrait, but displayed a full body with blood from a spear wound in the side—identifying the Mandylion as the full Shroud.",
    contestedNote: "The sermon is widely read as describing the Edessa image, but whether that image was the Shroud is debated (see the Mandylion entry above).",
    source: "Gregory the Referendarius Vatican MS gr. 511 & Dubarle (1997)",
    sourceUrl: "https://shroud.com/pdfs/n60part2.pdf",
    sourceLabel: "Read Gregory's Sermon (Guscin)"
  },
  {
    num: 28,
    title: "1192 AD Hungarian Pray Codex Manuscript",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "Artistic Manuscript Evidence",
    highlightTag: "Pray Codex (1192 AD)",
    summary: "A 12th-century Hungarian manuscript illustration of Christ's burial shows features that proponents compare to the Shroud; historians disagree about whether it depicts it.",
    detail:
      "The Hungarian Pray Codex, dated to about 1192–1195, contains an illustration of Christ's burial in which he is shown nude with crossed arms and apparently thumbless hands, and the burial cloth carries a pattern of small L-shaped marks. Proponents read these as reflecting the Shroud's hand position, poker-hole burns and twill weave, which would place the cloth before the 1260–1390 radiocarbon range. Other historians see ordinary Byzantine and medieval iconographic conventions.",
    contestedNote: "Historian Andrea Nicolotti attributes the similarities to common artistic conventions and notes that the illustrated cloth shows no body image; the supposed burn holes resemble decorative elements elsewhere in the manuscript.",
    source: "National Széchényi Library, Budapest, Pray Codex (1192–1195)",
    sourceUrl: "https://shroud.com/pdfs/n84part4.pdf",
    sourceLabel: "Read Pray Codex Analysis",
    relatedLinks: [{ label: "Wikipedia: Pray Codex", url: "https://en.wikipedia.org/wiki/Pray_Codex" }, { label: "Casabianca (2021), Heythrop Journal", url: "https://philpapers.org/archive/CASTOH-2.pdf" }]
  },
  {
    num: 29,
    title: "Fourth Crusade (1204 AD) & Geoffroi de Charny in Lirey",
    categoryGroup: "Historical Custody & The Mandylion",
    categoryLabel: "European Provenance",
    highlightTag: "Lirey, France (1354)",
    summary: "Robert de Clari documented the Shroud in Constantinople in 1204 before French Crusaders safeguarded it until its public display in Lirey.",
    detail:
      "In 1204 AD, French chronicler Robert de Clari recorded seeing the Shroud displayed every Friday at the Blachernae church in Constantinople. Following the Fourth Crusade, the relic was safeguarded by French nobility until knight Geoffroi de Charny officially displayed it in Lirey, France, in 1354, establishing its continuous, unbroken European registry.",
    contestedNote: "The documented chain has a gap between 1204 and the 1350s, and a memorandum by Bishop Pierre d'Arcis claimed the Lirey cloth had been painted.",
    source: "Robert de Clari, La Conquête de Constantinople (1204) & House of Savoy",
    sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Shroud_of_Turin",
    sourceLabel: "Read Provenance Overview"
  },
  // SECTION: BIBLICAL HARMONY & RESURRECTION REALITY
  {
    num: 30,
    title: "Gospel Harmony: The Passion & Crown of Thorns",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Scriptural Correspondence",
    highlightTag: "Fulfilled Scripture",
    summary: "Every traumatic injury on the linen matches the four Gospel Passion narratives point for point with absolute forensic precision.",
    detail:
      "The physical markers on the linen mirror the Gospel accounts with stunning clinical fidelity: the Roman scourge (John 19:1), the cruel crown of thorns (Matthew 27:29), the bruises from carrying the heavy timber patibulum (John 19:17), the impalement through wrists and feet (Luke 23:33), and the postmortem spear thrust into His side (John 19:34).",
    scripture: "Matthew 27:26–35; Mark 15:15–25; Luke 23:33; John 19:1–34",
    source: "Gospel Narratives & Comparative Forensic Pathology"
  },
  {
    num: 31,
    title: "Gospel Harmony: Joseph of Arimathea's Fine Linen",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Scriptural Correspondence",
    highlightTag: "Clean Linen Shroud",
    summary: "The New Testament Greek terms sindon and othonia describe the exact high-status linen fabric used in high-priesthood burial rites.",
    detail:
      "The Gospels describe Joseph of Arimathea purchasing a clean linen shroud ('sindon kathara') and wrapping Jesus' body according to Jewish burial customs with myrrh and aloes. The high-quality 3:1 herringbone twill reflects a wealthy counselor's purchase, fulfilling Isaiah's prophecy that the Messiah would be 'with a rich man in His death.'",
    scripture: "Isaiah 53:9; Matthew 27:59; Mark 15:46; John 19:38–40",
    source: "New Testament Hermeneutics & Biblical Archaeology"
  },
  {
    num: 32,
    title: "Saint John's Eyewitness Testimony at the Empty Tomb",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Scriptural Correspondence",
    highlightTag: "John 20:5–8",
    summary: "Peter and John saw the linen cloths lying collapsed in place, prompting John to immediately 'see and believe' the physical Resurrection.",
    detail:
      "John 20 describes John reaching the tomb first: he bent down and saw the linen wrappings lying flat ('keimena') as if the body had dematerialized or radiated out from within without disturbing the spices or folds. Seeing the collapsed shroud, John records: 'He saw and believed'—the physical linen was the immediate catalyst of apostolic faith.",
    scripture: "John 20:5–8; Luke 24:12",
    source: "Apostolic Eyewitness Testimony & Patristic Exegesis"
  },
  {
    num: 33,
    title: "The Unbroken Cumulative Verdict: A Physical Miracle",
    categoryGroup: "Gospel Harmony & The Resurrection",
    categoryLabel: "Cumulative Apologetics",
    highlightTag: "Miraculous Convergence",
    summary: "The convergence of 3D optical coding, sub-micron surface coloration, traumatic AB blood, and 1st-century Judaean flora defies forgery.",
    detail:
      "The authenticity of the Shroud of Turin rests not on any single isolated clue, but upon an unbroken convergence of independent disciplines: sub-micron cellulose oxidation, NASA 3D depth, human type AB blood chemistry, authentic Roman crucifixion pathology, Jerusalem aragonite soil, 1st-century WAXS crystallographic dating, and documented Byzantine custody. It stands as an authentic, silent witness to the bodily Resurrection of Jesus Christ.",
    source: "Cumulative Interdisciplinary Scientific Corpus (1978–2026)"
  }
];

// High-level thematic categories for the top navigation tabs
const countFor = (id: string) =>
  id === "All" ? evidenceList.length : evidenceList.filter((p) => p.categoryGroup === id).length;

export const NAVIGATION_CATEGORIES = [
  { id: "All", label: "All Evidence", icon: "✨", count: countFor("All") },
  { id: "Optics & Physical Properties", label: "Optics & 3D Topography", icon: "📐", count: countFor("Optics & Physical Properties") },
  { id: "Blood & Forensic Pathology", label: "Forensics & Blood Chemistry", icon: "🩸", count: countFor("Blood & Forensic Pathology") },
  { id: "Modern Laser Physics & Dating", label: "Laser Physics & Dating", icon: "⚡", count: countFor("Modern Laser Physics & Dating") },
  { id: "Genomics & Archaeology", label: "Genomics & Botany", icon: "🌿", count: countFor("Genomics & Archaeology") },
  { id: "Historical Custody & The Mandylion", label: "History & The Mandylion", icon: "📜", count: countFor("Historical Custody & The Mandylion") },
  { id: "Gospel Harmony & The Resurrection", label: "Gospel Harmony & Miracle", icon: "✝️", count: countFor("Gospel Harmony & The Resurrection") },
];
