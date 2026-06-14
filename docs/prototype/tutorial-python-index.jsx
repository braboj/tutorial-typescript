import { useState, useCallback } from "react";

const GITHUB_BASE = "https://github.com/braboj/tutorial-typescript/blob/main/examples";

const SECTIONS = [
  {
    id: "01_language", label: "Language", accent: "#2563EB",
    chipBg: "#DBEAFE", chipFg: "#1D4ED8", panelBg: "#EFF6FF", panelBorder: "#BFDBFE",
    desc: "Core TypeScript — from first types to advanced patterns",
    topics: [
      { id: "01_introduction",    title: "Introduction",         desc: "First program, why types matter, running TS, console I/O, statements, expressions, module basics", files: ["01_hello_world","02_why_types","03_running_typescript","04_console_output","05_statements","06_expressions","07_modules_intro","08_typescript_philosophy","lab"] },
      { id: "02_variables",       title: "Variables",            desc: "let/const, primitive types, any/unknown/never, arrays, tuples, and type inference",              files: ["01_let_const","02_primitive_types","03_any_unknown_never","04_arrays_and_tuples","05_objects","06_type_inference"] },
      { id: "03_comments",        title: "Comments",             desc: "Inline comments and TSDoc for documented, IDE-friendly APIs",                                    files: ["01_comments","02_tsdoc","lab"] },
      { id: "04_operators",       title: "Operators",            desc: "Arithmetic, comparison, logical, nullish coalescing, optional chaining, bitwise",                files: ["01_arithmetic","02_comparison","03_logical","04_nullish_and_optional","05_bitwise","lab"] },
      { id: "05_types_and_interfaces", title: "Types & Interfaces", desc: "Type aliases, interfaces, union/intersection, literal types, enums, type narrowing",         files: ["01_type_aliases","02_interfaces","03_union_and_intersection","04_literal_types","05_enums","06_type_narrowing"] },
      { id: "06_strings",         title: "Strings",              desc: "String basics, template literals, built-in methods, template literal types",                    files: ["01_basics","02_template_literals","03_methods","04_template_literal_types","lab"] },
      { id: "07_control_flow",    title: "Control Flow",         desc: "if/else, switch, loops, for-of/in, exhaustiveness checking",                                    files: ["01_if_else","02_switch","03_loops","04_for_of_and_in","05_exhaustiveness","lab"] },
      { id: "08_functions",       title: "Functions",            desc: "Declarations, parameters, arrow functions, overloads, this context, higher-order",              files: ["01_declarations","02_parameters","03_arrow_functions","04_overloads","05_this_context","06_higher_order"] },
      { id: "09_classes",         title: "Classes",              desc: "Basics, access modifiers, inheritance, abstract classes, getters/setters, static members",      files: ["01_basics","02_access_modifiers","03_inheritance","04_abstract","05_getters_setters","06_static_members"] },
      { id: "10_generics",        title: "Generics",             desc: "Generic functions, classes, constraints, interfaces, and built-in utility types",               files: ["01_generic_functions","02_generic_classes","03_constraints","04_generic_interfaces","05_utility_types","lab"] },
      { id: "11_modules",         title: "Modules",              desc: "Named exports, default exports, re-exports, ESM module system",                                  files: ["01_named_exports","02_default_exports","03_re_exports","lab"] },
      { id: "12_async",           title: "Async",                desc: "Promises, async/await, error handling, combinators, sequential vs parallel",                    files: ["01_promises","02_async_await","03_error_handling","04_promise_combinators","05_sequential_vs_parallel","lab"] },
      { id: "13_error_handling",  title: "Error Handling",       desc: "try/catch, custom error classes, Result pattern for typed errors",                              files: ["01_try_catch","02_custom_errors","03_result_pattern","lab"] },
      { id: "14_iterators_and_generators", title: "Iterators & Generators", desc: "Iterators, generators, and lazy sequences with TypeScript typing",                  files: ["01_iterators","02_generators","03_lazy_sequences","lab"] },
      { id: "15_decorators",      title: "Decorators",           desc: "Method decorators, class and field decorators (TC39 Stage 3)",                                  files: ["01_method_decorators","02_class_and_field_decorators","lab"] },
      { id: "16_resource_management", title: "Resource Management", desc: "using keyword and async disposal (TypeScript 5.2+)",                                         files: ["01_using","02_async_disposal","lab"] },
      { id: "17_advanced_types",  title: "Advanced Types",       desc: "keyof, indexed access, conditional types, infer, mapped types, variance, type predicates",      files: ["01_keyof_and_indexed_access","02_conditional_types","03_infer","04_mapped_types","05_variance","06_type_predicates_and_assertions"] },
    ],
  },
  {
    id: "02_design", label: "Design", accent: "#7C3AED",
    chipBg: "#EDE9FE", chipFg: "#6D28D9", panelBg: "#F5F3FF", panelBorder: "#DDD6FE",
    desc: "OOP, SOLID principles, design patterns, and TypeScript-native idioms",
    topics: [
      { id: "01_oop_basics",        title: "OOP Basics",        desc: "Encapsulation, abstraction, inheritance, polymorphism, composition over inheritance",            files: ["01_encapsulation","02_abstraction","03_inheritance","04_polymorphism","05_composition_over_inheritance","lab"] },
      { id: "02_solid_principles",  title: "SOLID Principles",  desc: "All five SOLID principles illustrated with practical TypeScript examples",                       files: ["01_single_responsibility","02_open_closed","03_liskov_substitution","04_interface_segregation","05_dependency_inversion","lab"] },
      { id: "03_design_patterns",   title: "Design Patterns",   desc: "Singleton, Factory, Builder, Adapter, Decorator, Strategy, Observer, Command",                  files: ["01_singleton","02_factory","03_builder","04_adapter","05_decorator","06_strategy","07_observer","08_command","lab"] },
      { id: "04_secure_design",     title: "Secure Design",     desc: "Input validation, injection protection, safe defaults, secrets, secure configuration, logging", files: ["01_input_validation","02_injection_and_escaping","03_safe_defaults","04_secrets_and_errors","05_secure_configuration","06_security_logging","lab"] },
      { id: "05_typed_patterns",    title: "Typed Patterns",    desc: "Type state, typed builder, generic repository, state machine, pipeline",                        files: ["01_type_state","02_typed_builder","03_generic_repository","04_state_machine","05_pipeline","lab"] },
    ],
  },
  {
    id: "03_libraries", label: "Libraries", accent: "#059669",
    chipBg: "#D1FAE5", chipFg: "#047857", panelBg: "#ECFDF5", panelBorder: "#A7F3D0",
    desc: "Node.js built-ins and npm libraries for real-world TypeScript",
    topics: [
      { id: "01_logging",       title: "Logging",        desc: "Structured logging with Node.js built-ins",                          files: ["01_logging","lab"] },
      { id: "02_concurrency",   title: "Concurrency",    desc: "Async concurrency patterns and scheduling",                          files: ["01_concurrency","lab"] },
      { id: "03_serialization", title: "Serialization",  desc: "Type-safe JSON parsing with reviver and replacer",                   files: ["01_json","lab"] },
      { id: "04_data_structures", title: "Data Structures", desc: "Map and Set: typed usage and iteration patterns",                 files: ["01_map_set","lab"] },
      { id: "05_filesystem",    title: "Filesystem",     desc: "Async file I/O with fs/promises, path manipulation",                 files: ["01_fs_promises","02_path","lab"] },
      { id: "06_crypto",        title: "Crypto",         desc: "Hashing, HMAC, and cryptographically secure random values",          files: ["01_hashing_and_random","lab"] },
      { id: "07_events",        title: "Events",         desc: "Strongly-typed EventEmitter with generics",                         files: ["01_event_emitter","lab"] },
      { id: "08_streams",       title: "Streams",        desc: "Readable and writable streams with backpressure handling",           files: ["01_streams","lab"] },
      { id: "09_http",          title: "HTTP",           desc: "HTTP server with node:http, typed fetch client",                     files: ["01_http_server","02_fetch_client","lab"] },
      { id: "10_testing",       title: "Testing",        desc: "node:test and assert/strict — no Jest/Vitest required",              files: ["01_node_test","lab"] },
      { id: "11_zod",           title: "Zod",            desc: "Runtime schema validation and type inference with Zod v4",           files: ["01_zod","lab"] },
      { id: "12_dotenv",        title: "dotenv",         desc: "Type-safe environment variable management",                          files: ["01_dotenv","lab"] },
      { id: "13_dayjs",         title: "Day.js",         desc: "Date parsing, formatting, and manipulation",                        files: ["01_dayjs","lab"] },
      { id: "14_express",       title: "Express",        desc: "REST API with typed routes using Express 5",                        files: ["01_express","lab"] },
      { id: "15_regex",         title: "Regex",          desc: "Regular expressions: named captures, flags, patterns",               files: ["01_regex","lab"] },
      { id: "16_worker_threads", title: "Worker Threads", desc: "CPU-bound work offloaded to worker_threads",                       files: ["01_worker_threads","lab"] },
    ],
  },
];

function ghUrl(sectionId, topicId, file) {
  const filename = file === "lab" ? "lab.ts" : `${file}.ts`;
  return `${GITHUB_BASE}/${sectionId}/${topicId}/${filename}`;
}

function runPath(sectionId, topicId, file) {
  const filename = file === "lab" ? "lab.ts" : `${file}.ts`;
  return `examples/${sectionId}/${topicId}/${filename}`;
}

function TopicCard({ topic, section, onFileHover }) {
  const num = (topic.id.match(/^(\d+)/) ?? ["",""])[1];
  const totalFiles = topic.files.length;

  return (
    <div style={{
      background: "white",
      border: "1px solid #E5E7EB",
      borderLeft: `4px solid ${section.accent}`,
      borderRadius: "0 8px 8px 0",
      padding: "14px 16px",
      display: "flex", flexDirection: "column", gap: "9px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{
          fontFamily: "ui-monospace, monospace", fontSize: "10px",
          fontWeight: 700, color: section.accent, opacity: 0.7,
        }}>
          {num}
        </span>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#111827", flex: 1, lineHeight: 1.2 }}>
          {topic.title}
        </span>
        <span style={{
          fontSize: "11px", fontWeight: 600,
          background: section.chipBg, color: section.chipFg,
          padding: "1px 7px", borderRadius: "99px",
        }}>
          {totalFiles}
        </span>
      </div>

      <div style={{
        fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
        fontSize: "11px", color: "#9CA3AF", lineHeight: 1.45,
      }}>
        <span style={{ color: "#D1D5DB" }}>// </span>{topic.desc}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {topic.files.map((file, i) => {
          const isLast = i === totalFiles - 1;
          const isLab = file === "lab";
          const filename = isLab ? "lab.ts" : `${file}.ts`;
          const url = ghUrl(section.id, topic.id, file);
          const cmd = `npx tsx ${runPath(section.id, topic.id, file)}`;

          return (
            <div key={file} style={{ display: "flex", alignItems: "center", gap: "4px", minHeight: "21px" }}>
              <span style={{
                fontFamily: "ui-monospace, monospace", fontSize: "10px",
                color: "#D1D5DB", userSelect: "none",
                width: "26px", textAlign: "right", flexShrink: 0,
              }}>
                {isLast ? "└──" : "├──"}
              </span>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = section.chipBg;
                  e.currentTarget.style.color = section.chipFg;
                  onFileHover(cmd);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = isLab ? "#D97706" : "#6B7280";
                  onFileHover(null);
                }}
                style={{
                  fontFamily: "ui-monospace, 'Cascadia Code', monospace",
                  fontSize: "12px", color: isLab ? "#D97706" : "#6B7280",
                  textDecoration: "none", padding: "1px 5px", borderRadius: "4px",
                  display: "inline-flex", alignItems: "center", gap: "5px",
                }}
              >
                {filename}
                {isLab && (
                  <span style={{
                    fontFamily: "system-ui, sans-serif", fontSize: "9px",
                    fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em",
                    background: "#FEF3C7", color: "#B45309",
                    padding: "0 5px", borderRadius: "3px",
                  }}>
                    exercise
                  </span>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TsSprintIndex() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverCmd, setHoverCmd] = useState(null);
  const [copied, setCopied] = useState(false);

  const section = SECTIONS[activeIdx];
  const totalFiles = section.topics.reduce((s, t) => s + t.files.length, 0);

  const handleCopy = useCallback(() => {
    if (!hoverCmd) return;
    const doCopy = (text) => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      _ = text;
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hoverCmd).then(() => doCopy(hoverCmd)).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = hoverCmd;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); doCopy(hoverCmd); } catch (e) {}
      document.body.removeChild(ta);
    }
  }, [hoverCmd]);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#F9FAFB", minHeight: "100vh" }}>

      {/* ── HEADER ─────────────────────────────────────── */}
      <div style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}>

        {/* Brand row */}
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          padding: "10px 20px", borderBottom: "1px solid #F3F4F6",
        }}>
          <code style={{ fontSize: "15px", fontWeight: 700, color: "#111827", letterSpacing: "-0.5px" }}>
            ts-sprint
          </code>
          <span style={{ fontSize: "12px", color: "#9CA3AF" }}>
            TypeScript by Example · braboj/tutorial-typescript
          </span>
          <div style={{ marginLeft: "auto" }}>
            <a
              href="https://github.com/braboj/tutorial-typescript"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "12px", color: "#6B7280", textDecoration: "none",
                padding: "4px 10px", border: "1px solid #E5E7EB",
                borderRadius: "6px", display: "inline-flex", alignItems: "center", gap: "4px",
              }}
            >
              ↗ GitHub
            </a>
          </div>
        </div>

        {/* Quick-Run bar */}
        <div style={{
          background: "#0F172A", padding: "6px 20px",
          display: "flex", alignItems: "center", gap: "8px", minHeight: "36px",
        }}>
          <span style={{ color: "#475569", fontFamily: "ui-monospace, monospace", fontSize: "12px", flexShrink: 0 }}>$</span>
          <span style={{ color: "#7DD3FC", fontFamily: "ui-monospace, monospace", fontSize: "12px", flexShrink: 0 }}>npx tsx</span>
          <span style={{
            fontFamily: "ui-monospace, monospace", fontSize: "12px", flex: 1,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            color: hoverCmd ? "#E2E8F0" : "#334155",
            fontStyle: hoverCmd ? "normal" : "italic",
          }}>
            {hoverCmd ? hoverCmd.replace("npx tsx ", "") : "hover a file below to see its run command"}
          </span>
          {hoverCmd && (
            <button
              onClick={handleCopy}
              style={{
                background: copied ? "#064E3B" : "#1E293B",
                border: "1px solid #334155", borderRadius: "4px",
                color: copied ? "#6EE7B7" : "#94A3B8",
                fontSize: "11px", padding: "2px 10px",
                cursor: "pointer", flexShrink: 0,
              }}
            >
              {copied ? "copied!" : "copy"}
            </button>
          )}
        </div>

        {/* Section tabs */}
        <div style={{ display: "flex", padding: "0 20px" }}>
          {SECTIONS.map((s, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={s.id}
                onClick={() => { setActiveIdx(i); setHoverCmd(null); }}
                style={{
                  border: "none", cursor: "pointer", padding: "8px 14px",
                  background: "transparent", fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? s.accent : "#6B7280",
                  borderBottom: `2px solid ${isActive ? s.accent : "transparent"}`,
                  marginBottom: "-1px",
                  display: "flex", alignItems: "center", gap: "6px",
                }}
              >
                <span style={{
                  fontFamily: "ui-monospace, monospace", fontSize: "10px", fontWeight: 700,
                  background: isActive ? s.chipBg : "#F3F4F6",
                  color: isActive ? s.chipFg : "#9CA3AF",
                  padding: "1px 6px", borderRadius: "99px",
                }}>
                  {s.id.split("_")[0]}
                </span>
                {s.label}
                <span style={{
                  fontSize: "11px", background: "#F3F4F6", color: "#9CA3AF",
                  padding: "1px 6px", borderRadius: "99px",
                }}>
                  {s.topics.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SECTION BANNER ──────────────────────────────── */}
      <div style={{
        background: section.panelBg, borderBottom: `1px solid ${section.panelBorder}`,
        padding: "8px 20px", display: "flex", alignItems: "center", gap: "12px",
      }}>
        <code style={{ fontSize: "11px", color: section.accent, fontFamily: "ui-monospace, monospace" }}>
          examples/{section.id}/
        </code>
        <span style={{ fontSize: "12px", color: section.chipFg }}>{section.desc}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: "6px" }}>
          {[`${section.topics.length} topics`, `${totalFiles} files`].map(lbl => (
            <span key={lbl} style={{
              fontSize: "11px", fontWeight: 500,
              background: "white", color: section.chipFg,
              padding: "2px 8px", borderRadius: "99px",
              border: `1px solid ${section.panelBorder}`,
            }}>
              {lbl}
            </span>
          ))}
        </div>
      </div>

      {/* ── TOPIC CARDS ─────────────────────────────────── */}
      <main style={{
        maxWidth: "1280px", margin: "0 auto", padding: "14px 16px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "10px",
      }}>
        {section.topics.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
            section={section}
            onFileHover={setHoverCmd}
          />
        ))}
      </main>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "16px 20px",
        borderTop: "1px solid #E5E7EB",
        display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px",
      }}>
        <div>
          <div style={{ fontSize: "11px", color: "#9CA3AF", marginBottom: "4px" }}>Quick start</div>
          <code style={{
            fontFamily: "ui-monospace, monospace", fontSize: "11px",
            background: "#F3F4F6", color: "#374151",
            padding: "4px 10px", borderRadius: "6px",
          }}>
            git clone https://github.com/braboj/tutorial-typescript &amp;&amp; cd tutorial-typescript &amp;&amp; npm install
          </code>
        </div>
        <div style={{ marginLeft: "auto", fontSize: "11px", color: "#D1D5DB" }}>
          TypeScript 6 · tsx · ESM · node:test
        </div>
      </footer>
    </div>
  );
}
