import React, { useState } from "react";
import "../App.css";
import { evidenceList, NAVIGATION_CATEGORIES } from "../data/evidence";

// Evidence points, grouped into thematic categories
export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPoints = evidenceList.filter((pt) => {
    const matchesCategory =
      selectedCategory === "All" || pt.categoryGroup === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      pt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pt.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pt.scripture && pt.scripture.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8D7FE] via-[#F4EDFE] to-[#EDD6F7] text-[#291238] font-sans relative selection:bg-[#D4B9FC] selection:text-[#291238]">
      {/* Background Ambience with rich soft glows centered on #E8D7FE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[38rem] h-[38rem] rounded-full bg-[#D4B9FC]/40 blur-[130px]" />
        <div className="absolute top-1/3 -left-32 w-[38rem] h-[38rem] rounded-full bg-[#F4EDFE]/80 blur-[140px]" />
        <div className="absolute -bottom-28 right-1/4 w-[36rem] h-[36rem] rounded-full bg-[#D4B9FC]/50 blur-[130px]" />
      </div>

      {/* BEAUTIFUL HEADER */}
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#291238] focus:text-white focus:text-sm focus:font-bold"
            >
              Skip to main content
            </a>
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 border-b border-[#D1B3FB]/60 shadow-sm">
              {/* Subtle top accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#7B1FA2]/40 to-transparent" />
      
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Brand Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#291238] to-[#4A154B] flex items-center justify-center text-xl shrink-0 shadow-lg shadow-[#291238]/30">
                      ✝️
                    </div>
                    <div>
                      <p className="font-black text-lg sm:text-xl tracking-tight text-[#291238] leading-none">
                        The Shroud of Turin
                      </p>
                      <p className="text-[11px] font-medium text-[#6B3D84] tracking-wider uppercase mt-0.5">
                        Empirical Evidence Compendium
                      </p>
                    </div>
                  </div>
      
                  <a
                    href="https://www.shroud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-xs font-semibold px-4 py-2 rounded-xl bg-white/80 hover:bg-white text-[#291238] border border-[#D1B3FB]/60 hover:border-[#7B1FA2]/40 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <span>STURP Archive</span>
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                </div>
      
                {/* Navigation Tabs */}
                <div className="pb-2.5">
                  <div className="flex flex-wrap items-center gap-1.5 justify-center">
                    {NAVIGATION_CATEGORIES.map((cat) => {
                      const isActive = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`relative px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                            isActive
                              ? "bg-gradient-to-r from-[#291238] to-[#4A154B] text-white shadow-md shadow-[#291238]/30"
                              : "bg-white/60 hover:bg-white text-[#4A2460] hover:text-[#291238] hover:shadow-sm"
                          }`}
                        >
                          {cat.label}
                          {isActive && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </header>

      <main id="main" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        {/* COMMANDING, PROFESSIONAL & BEAUTIFULLY POLISHED HERO SECTION */}
                <section className="text-center pt-4 pb-12">
                  {/* Reverent Overline Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D1B3FB] text-[#291238] text-xs sm:text-sm font-extrabold tracking-wide shadow-2xs mb-5 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out animate-slide-up hero-element-1 hover:ring-2 hover:ring-[#7B1FA2]/20">
                    <span className="text-base">✝️</span>
                    <span>The Sacred Burial Linen of Jesus Christ</span>
                    <span className="text-[#8B50A8]">•</span>
                    <span className="text-[11px] uppercase tracking-wider font-black text-[#5C1E70]">
                      Empirical Investigation
                    </span>
                  </div>
        
                  {/* Majestic Hero Headline */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#291238] tracking-tight leading-[1.12] mb-6 animate-slide-up hero-element-2 group cursor-default hover:scale-[1.02] transition-transform duration-300 ease-out">
                    The Silent Witness to the{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-[#4A154B] via-[#7B1FA2] to-[#A0162B] bg-clip-text text-transparent">
                        Miracle of the Resurrection
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute left-0 bottom-1 w-full h-3.5 bg-[#D4B9FC] -z-1 rounded-sm opacity-80"
                      />
                    </span>
                  </h1>
        
                  {/* Polished Subtitle Text */}
                  <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#4A2460] leading-relaxed mb-8 font-normal animate-slide-up hero-element-3">
                    A comprehensive, rigorous synthesis of {evidenceList.length} lines of evidence drawn from published scientific studies, NASA 3D
                    spatial depth analyses, human hemoglobin serology, sub-micron vacuum ultraviolet
                    physics, and unbroken historical custody documenting the authentic burial cloth of Our
                    Lord Jesus Christ.
                  </p>
        
                  {/* Quick Metrics Bar to Show the Miracle at a Glance */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 text-left animate-slide-up hero-element-4">
                    <div className="group p-4 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out hover:ring-2 hover:ring-[#7B1FA2]/20">
                                          <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider group-hover:text-[#7B1FA2] transition-colors">Image Depth</div>
                      <div className="text-lg sm:text-xl font-black text-[#291238] group-hover:text-[#651576] transition-colors">0.2 Microns</div>
                      <div className="text-[10px] text-[#6B3D84] group-hover:text-[#5C2D6A] transition-colors">Primary fibril cell wall only</div>
                    </div>
                    <div className="group p-4 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out hover:ring-2 hover:ring-[#7B1FA2]/20">
                                          <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider group-hover:text-[#7B1FA2] transition-colors">Blood Analysis</div>
                      <div className="text-lg sm:text-xl font-black text-[#851627] group-hover:text-[#a01e2a] transition-colors">Type AB Human</div>
                      <div className="text-[10px] text-[#6B3D84] group-hover:text-[#5C2D6A] transition-colors">Traumatic high-bilirubin clots</div>
                    </div>
                    <div className="group p-4 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out hover:ring-2 hover:ring-[#7B1FA2]/20">
                                          <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider group-hover:text-[#7B1FA2] transition-colors">X-Ray Crystallography</div>
                      <div className="text-lg sm:text-xl font-black text-[#291238] group-hover:text-[#651576] transition-colors">~2,000 Years</div>
                      <div className="text-[10px] text-[#6B3D84] group-hover:text-[#5C2D6A] transition-colors">2022 WAXS study (one thread)</div>
                    </div>
                    <div className="group p-4 rounded-2xl bg-white/90 border border-[#D1B3FB] shadow-2xs hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out hover:ring-2 hover:ring-[#7B1FA2]/20">
                                          <div className="text-[11px] font-bold text-[#6B3D84] uppercase tracking-wider group-hover:text-[#7B1FA2] transition-colors">Radiant Burst</div>
                      <div className="text-lg sm:text-xl font-black text-[#5C1E70] group-hover:text-[#7B1FA2] transition-colors">34 Trillion W</div>
                      <div className="text-[10px] text-[#6B3D84] group-hover:text-[#5C2D6A] transition-colors">ENEA Vacuum UV Laser Physics</div>
                    </div>
                  </div>
        
                  {/* Elegant Scripture Testimony Card */}
                  <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-white/95 border-2 border-[#D1B3FB] shadow-sm text-center relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out animate-slide-up hero-element-5 hover:ring-2 hover:ring-[#7B1FA2]/20">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7B1FA2] via-[#E8D7FE] to-[#A0162B]" />
                    <p className="italic font-serif text-[#331135] text-base sm:text-lg leading-relaxed mb-2">
                      "Simon Peter arrived and went inside the tomb. He saw the linen wrappings lying there,
                      and the face cloth that had been on Jesus' head... Then the other disciple, who had
                      reached the tomb first, also went in, and he saw and believed."
                    </p>
                    <div className="text-xs font-black text-[#6A256E] tracking-wider uppercase">
                      — John 20:6–8 • The Catalyst of Apostolic Faith
                    </div>
                  </div>
                </section>

                {/* HOW TO READ THIS PAGE */}
                <div className="mb-8 p-4 rounded-2xl bg-white/90 border border-[#D1B3FB] text-xs sm:text-sm text-[#4A2460] leading-relaxed">
                  <span className="font-black text-[#291238]">How to read this page: </span>
                  Each entry links to the original paper or a primary source where one is available. Where researchers
                  dispute a finding, the card includes a &ldquo;Scholarly context&rdquo; note. The 1988 radiocarbon
                  dating (1260&ndash;1390 AD, published in{" "}
                  <a
                    href="https://www.nature.com/articles/337611a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[#291238]"
                  >
                    Nature, 1989
                  </a>
                  ) remains the most widely cited scientific date, and several entries discuss challenges to it.
                </div>

        {/* SEARCH & DETAILED FILTER CONTROLS */}
                <section className="mb-8 p-4 sm:p-5 rounded-3xl bg-white/95 border border-[#D1B3FB] shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
                    {/* Search Input */}
                    <div className="w-full sm:w-80 relative group">
                      <input
                        type="search"
                        aria-label="Search the evidence"
                        placeholder="Search across all evidence, forensics, sources..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2.5 pl-10 rounded-2xl bg-[#F8F2FE] border border-[#D1B3FB] text-sm text-[#291238] placeholder-[#79508F] focus:outline-none focus:ring-2 focus:ring-[#7B1FA2]/40 focus:border-[#7B1FA2] transition-all"
                      />
                      <span aria-hidden="true" className="absolute left-3.5 top-3 text-sm text-[#79508F] group-focus-within:text-[#7B1FA2] transition-colors">🔍</span>
                    </div>
        
                    {/* Evidence Count Pill */}
                    <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
                      <span className="text-xs font-bold text-[#5C2D6A]">
                        Category: <strong className="text-[#291238]">{selectedCategory}</strong>
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#E8D7FE] text-[#291238] font-black text-xs border border-[#D1B3FB] hover:scale-105 transition-transform">
                        {filteredPoints.length} Points
                      </span>
                    </div>
                  </div>
                </section>

        {/* GROUPED EVIDENCE CARDS (ORGANIZED, POLISHED & STACKED BEAUTIFULLY) */}
                <div className="space-y-4">
                  {filteredPoints.map((item) => (
                    <article
                                          key={item.num}
                                          className="p-6 rounded-3xl bg-white/95 border border-[#D1B3FB] hover:border-[#7B1FA2]/60 shadow-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-101 transition-all duration-300 ease-out group relative overflow-hidden hover:ring-2 hover:ring-[#7B1FA2]/20"
                                        >
                                          {/* Subtle hover glow with enhanced gradient */}
                                          <div className="absolute inset-0 bg-gradient-to-br from-[#E8D7FE]/40 via-[#D4B9FC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                          {/* Top accent line on hover */}
                                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7B1FA2]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
                      {/* Header with Number, Title, and Badges */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3 relative">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#E8D7FE] text-[#291238] font-black text-xs flex items-center justify-center shrink-0 border border-[#D1B3FB] shadow-2xs group-hover:bg-[#291238] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                            #{item.num}
                          </span>
                          <div>
                            <h2 className="text-lg sm:text-xl font-extrabold text-[#291238] group-hover:text-[#651576] transition-colors leading-tight">
                              {item.title}
                            </h2>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-[11px] font-bold text-[#6B3D84] group-hover:text-[#5C2D6A] transition-colors">
                                {item.categoryLabel}
                              </span>
                              {item.highlightTag && (
                                <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#F4EDFE] text-[#5C1E70] border border-[#D1B3FB] group-hover:bg-[#7B1FA2] group-hover:text-white transition-colors">
                                  {item.highlightTag}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
        
                        <span className="self-start sm:self-auto text-[11px] font-black px-3 py-1 rounded-full bg-[#E8D7FE]/80 text-[#3F194E] border border-[#D1B3FB] uppercase tracking-wider shrink-0 group-hover:bg-[#291238] group-hover:text-white group-hover:border-[#291238] transition-all duration-300">
                          {item.categoryGroup}
                        </span>
                      </div>
        
                      {/* Point Narrative */}
                      <p className="text-sm sm:text-base text-[#411F4A] leading-relaxed mb-3 pl-0 sm:pl-11 font-normal group-hover:text-[#291238] transition-colors">
                        {item.detail}
                      </p>
        
                      {item.contestedNote && (
                        <div className="mb-3 pl-0 sm:pl-11">
                          <div className="text-xs leading-relaxed text-[#5A3A00] bg-[#FFF8E6] border border-[#F0DCA0] rounded-xl p-2.5">
                            <span className="font-black">Scholarly context: </span>
                            {item.contestedNote}
                          </div>
                        </div>
                      )}

                      {/* Scripture Link if present */}
                      {item.scripture && (
                        <div className="mb-3 pl-0 sm:pl-11 flex items-center gap-2 text-xs font-bold text-[#7B1FA2] bg-[#FAF5FE] p-2.5 rounded-xl border border-[#E8D7FE] inline-flex group-hover:bg-[#E8D7FE] transition-colors">
                          <span>📖</span>
                          <span>Biblical Correspondence: {item.scripture}</span>
                        </div>
                      )}
        
                      {/* Source & Study Attribution */}
                      <div className="pt-3 border-t border-[#F2E5FD] flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B3D84] pl-0 sm:pl-11 group-hover:border-[#D1B3FB] transition-colors">
                        <span className="font-mono text-[11px] font-medium group-hover:text-[#5C2D6A] transition-colors">Source: {item.source}</span>
                        {item.sourceUrl && (
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#651576] hover:underline flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F8F2FE] border border-[#D1B3FB] group-hover:bg-[#291238] group-hover:text-white group-hover:border-[#291238] transition-all duration-300"
                          >
                            <span>{item.sourceLabel ?? "Read Original Study"}</span>
                            <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                          </a>
                        )}
                      </div>
                    {item.relatedLinks && item.relatedLinks.length > 0 && (
                        <div className="mt-2 pl-0 sm:pl-11 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6B3D84]">
                          <span className="font-bold">Related:</span>
                          {item.relatedLinks.map((l) => (
                            <a
                              key={l.url}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-2 hover:text-[#291238]"
                            >
                              {l.label} ↗
                            </a>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}

          {filteredPoints.length === 0 && (
                      <div className="text-center py-16 p-8 rounded-3xl bg-white/95 border-2 border-[#D1B3FB] shadow-lg">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#E8D7FE] to-[#D4B9FC] flex items-center justify-center text-3xl shadow-lg">
                          🔍
                        </div>
                        <p className="text-lg font-black text-[#291238] mb-2">
                          No points matched your search for &ldquo;{searchQuery}&rdquo;.
                        </p>
                        <p className="text-xs text-[#6B3D84] mb-6">
                          Try searching for terms like &ldquo;blood&rdquo;, &ldquo;laser&rdquo;, &ldquo;Pia&rdquo;, &ldquo;WAXS&rdquo;, or &ldquo;John&rdquo;.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery("");
                            setSelectedCategory("All");
                          }}
                          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#291238] to-[#4A154B] text-white font-bold text-xs hover:from-[#4A154B] hover:to-[#291238] hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                          Reset Search & Filter
                        </button>
                      </div>
                    )}
        </div>

        {/* COMPREHENSIVE MIRACLE VERDICT CALLOUT */}
                <section className="mt-16 rounded-3xl bg-white/95 border-2 border-[#D1B3FB] p-8 md:p-12 text-center shadow-md relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7B1FA2] via-[#E8D7FE] to-[#A0162B]" />
                  <div className="max-w-2xl mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#E8D7FE] to-[#D4B9FC] flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform duration-300">
                      🕊️
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-[#291238] tracking-tight mb-4">
                      "He Is Not Here; For He Has Risen"
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A2460] leading-relaxed mb-6">
                      The Shroud of Turin is neither an artistic forgery nor a medieval relic of
                      imagination. It presents an unbreakable, interdisciplinary convergence of 1st-century
                      Syrian herringbone linen, authentic high-bilirubin human blood, anatomically exact
                      Roman scourge and crucifixion trauma, sub-micron vacuum ultraviolet radiation, and
                      limestone matching the tombs of Jerusalem. It remains the physical, radiant signature
                      of the victory of Jesus Christ over death.
                    </p>
                    <div className="text-sm font-serif italic text-[#300E34]">
                      "For us, the Shroud is the mirror of the Gospel: suffering transformed into boundless
                      love and eternal hope."
                      <span className="block not-italic font-sans font-bold uppercase tracking-widest text-[#7B1FA2] text-xs mt-1.5">
                        — Saint John Paul II
                      </span>
                    </div>
                  </div>
                </section>
      </main>

      {/* PROFESSIONAL, HIGH-POLISH FOOTER */}
            <footer className="relative z-10 bg-white/90 border-t-2 border-[#D1B3FB] pt-12 pb-10 text-[#4A2460]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#E8D7FE]">
                  {/* Column 1: Christological Identity */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E8D7FE] to-[#D4B9FC] border border-[#D1B3FB] flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                        ✝️
                      </div>
                      <div>
                        <div className="font-black text-lg text-[#291238] group-hover:text-[#651576] transition-colors">The Shroud of Turin</div>
                        <div className="text-xs text-[#6B3D84] font-semibold">Jesus' Sacred Burial Cloth</div>
                      </div>
                    </div>
                    <p className="text-xs text-[#5C2D6A] leading-relaxed">
                      Dedicated to defending the authentic historical, forensic, and physical evidence
                      documenting the Passion, Death, and bodily Resurrection of Jesus Christ.
                    </p>
                  </div>
      
                  {/* Column 2: Navigation Categories */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#291238] mb-3">
                      Evidence Categories
                    </div>
                    <ul className="text-xs space-y-2 text-[#5C2D6A]">
                      {NAVIGATION_CATEGORIES.slice(1).map((cat) => (
                        <li key={cat.id}>
                          <button
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              window.scrollTo({ top: 400, behavior: "smooth" });
                            }}
                            className="hover:text-[#7B1FA2] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer text-left group"
                          >
                            <span className="transition-transform group-hover:translate-x-0.5">{cat.icon}</span>
                            <span>{cat.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
      
                  {/* Column 3: Primary Scholarly Archives */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#291238] mb-3">
                      Scholarly Research Archives
                    </div>
                    <ul className="text-xs space-y-2 font-bold text-[#651576]">
                      <li>
                        <a
                          href="https://www.shroud.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 group"
                        >
                          <span className="transition-colors group-hover:text-[#291238]">STURP Official Scientific Papers</span>
                          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.nature.com/articles/srep15635"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 group"
                        >
                          <span className="transition-colors group-hover:text-[#291238]">Nature Scientific Reports (Genomics)</span>
                          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.mdpi.com/2571-9408/5/2/47"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 group"
                        >
                          <span className="transition-colors group-hover:text-[#291238]">Heritage MDPI (2022 WAXS Dating)</span>
                          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.enea.it/en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 group"
                        >
                          <span className="transition-colors group-hover:text-[#291238]">ENEA National Laser Research</span>
                          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
      
                {/* Bottom Scripture & Copyright Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B3D84]">
                  <div className="font-serif italic text-sm text-[#38113B] text-center sm:text-left">
                    "I am the resurrection and the life. Whoever believes in Me, though he die, yet shall he live." — John 11:25
                  </div>
                  <div className="font-sans font-bold text-[#5C2D6A]">
                    Ad Majorem Dei Gloriam
                  </div>
                </div>
              </div>
            </footer>
    </div>
  );
}