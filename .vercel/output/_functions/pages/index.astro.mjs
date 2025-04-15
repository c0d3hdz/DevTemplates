import { c as createComponent, r as renderHead, b as renderSlot, e as renderTemplate, f as createAstro, m as maybeRenderHead, s as spreadAttributes, g as addAttribute, h as renderComponent, u as unescapeHTML, A as AstroError, U as UnknownContentCollectionError, i as RenderUndefinedEntryError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent } from '../chunks/astro/server_Dz6Y36Lk.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/path_Cvt6sEOY.mjs';
import { V as VALID_INPUT_FORMATS } from '../chunks/consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';
export { renderers } from '../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>DevTemplates</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/layouts/Layout.astro", void 0);

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/node_modules/@lucide/astro/src/Icon.astro", void 0);

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const BookDashed = createLucideIcon("book-dashed", [["path", { "d": "M12 17h1.5" }], ["path", { "d": "M12 22h1.5" }], ["path", { "d": "M12 2h1.5" }], ["path", { "d": "M17.5 22H19a1 1 0 0 0 1-1" }], ["path", { "d": "M17.5 2H19a1 1 0 0 1 1 1v1.5" }], ["path", { "d": "M20 14v3h-2.5" }], ["path", { "d": "M20 8.5V10" }], ["path", { "d": "M4 10V8.5" }], ["path", { "d": "M4 19.5V14" }], ["path", { "d": "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }], ["path", { "d": "M8 22H6.5a1 1 0 0 1 0-5H8" }]]);

const BookUser = createLucideIcon("book-user", [["path", { "d": "M15 13a3 3 0 1 0-6 0" }], ["path", { "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { "cx": "12", "cy": "8", "r": "2" }]]);

const Code = createLucideIcon("code", [["polyline", { "points": "16 18 22 12 16 6" }], ["polyline", { "points": "8 6 2 12 8 18" }]]);

const Eye = createLucideIcon("eye", [["path", { "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", { "cx": "12", "cy": "12", "r": "3" }]]);

const History = createLucideIcon("history", [["path", { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }], ["path", { "d": "M12 7v5l4 2" }]]);

const Images = createLucideIcon("images", [["path", { "d": "M18 22H4a2 2 0 0 1-2-2V6" }], ["path", { "d": "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" }], ["circle", { "cx": "12", "cy": "8", "r": "2" }], ["rect", { "width": "16", "height": "16", "x": "6", "y": "2", "rx": "2" }]]);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between items-center p-4 sticky top-0 bg-white shadow-md z-10"> <div class="text-3xl font-bold ">
DevTemplates
</div> <ul class="flex gap-6 justify-between items-center"> <a href="#Destacado"> ${renderComponent($$result, "History", History, { "class": "w-8 h-8 hover:scale-110 ease-in-out transition-discrete duration-300 cursor-pointer" })} </a> ${renderComponent($$result, "Images", Images, { "class": "w-8 h-8 hover:scale-110 ease-in-out transition-discrete duration-300 cursor-pointer" })} ${renderComponent($$result, "BookUser", BookUser, { "class": "w-8 h-8 hover:scale-110 ease-in-out transition-discrete duration-300 cursor-pointer" })} </ul> </nav>`;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/components/Navbar.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Blob = createSvgComponent({"meta":{"src":"/_astro/blob.BApoFbH2.svg","width":100,"height":100,"format":"svg"},"attributes":{"id":"sw-js-blob-svg","viewBox":"0 0 100 100"},"children":"\n                    <defs> \n                        <linearGradient id=\"sw-gradient\" x1=\"0\" x2=\"1\" y1=\"1\" y2=\"0\">\n                            <stop id=\"stop1\" stop-color=\"rgba(55, 159.74, 248, 0.42)\" offset=\"0%\"></stop>\n                            <stop id=\"stop2\" stop-color=\"rgba(70.484, 137.27, 249.379, 0.28)\" offset=\"100%\"></stop>\n                        </linearGradient>\n                    </defs>\n                <path fill=\"url(#sw-gradient)\" d=\"M19.7,-33.8C25.6,-30.7,30.3,-25.5,31.2,-19.5C32.1,-13.5,29.2,-6.8,30.1,0.5C31,7.8,35.8,15.6,35.3,22.3C34.8,29,28.9,34.5,22.2,35C15.4,35.5,7.7,31,1,29.3C-5.7,27.6,-11.5,28.7,-17.7,27.9C-24,27.1,-30.9,24.4,-36.2,19.5C-41.6,14.5,-45.5,7.3,-43.6,1.1C-41.6,-5,-33.9,-10,-29.2,-16.2C-24.6,-22.5,-23,-29.9,-18.7,-33.8C-14.3,-37.7,-7.2,-38.2,-0.1,-38C6.9,-37.8,13.8,-36.9,19.7,-33.8Z\" width=\"100%\" height=\"100%\" transform=\"translate(50 50)\" stroke-width=\"0\" style=\"transition: 0.3s;\" stroke=\"url(#sw-gradient)\"></path>\n              "});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-center py-16 mt-24 mb-60 relative justify-center items-center"> <span class="absolute -z-10 -top-2/5 right-1/4"> ${renderComponent($$result, "Blob", Blob, { "width": 900, "height": 900 })}</span> <h1 class="text-4xl font-bold p-0 m-0"> <p class="-rotate-2 opacity-90"> Galería de 🎨</p> <br> <p class="text-8xl">Plantillas Web</p> </h1> <p class="mt-4 text-gray-500"> ${renderComponent($$result, "Code", Code, { "class": "m-auto w-8 h-8 text-black" })} HTML, React, Tailwind y más</p> <br> <a href="#galeria" class=" bg-blue-800 mt-4 p-4 text-blue-50 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 ease-in-out active:scale-90 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/30">
Ver Galería
</a> </section>`;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/components/Hero.astro", void 0);

const Line = createSvgComponent({"meta":{"src":"/_astro/llline.CkkusbMc.svg","width":800,"height":400,"format":"svg"},"attributes":{"xmlns:svgjs":"http://svgjs.dev/svgjs","viewBox":"0 0 800 400"},"children":"<path d=\"M208.52017211914062,107.62332153320312C219.73990727742512,118.84305315653484,226.40808339436848,142.3408132171631,256.95068359375,156.05381774902344C287.4932837931315,169.7668222808838,300.8819083658854,176.58146986643473,340.3587341308594,166.81614685058594C379.83555989583334,157.05082383473714,370.6322752380371,118.05680150349934,427.354248046875,113.9013442993164C484.0762208557129,109.74588709513347,548.6337701416015,140.77578278859457,585.2017822265625,148.87892150878906\" fill=\"none\" stroke-width=\"19\" stroke=\"url(&quot;#SvgjsLinearGradient1000&quot;)\" stroke-linecap=\"round\" stroke-dasharray=\"0 0\" stroke-opacity=\"0.69\" transform=\"matrix(0.9950062499999999,0,0,0.9950062499999999,5.120847331905338,61.177110904931965)\"></path><defs><linearGradient id=\"SvgjsLinearGradient1000\"><stop stop-color=\"hsl(230, 55%, 50%)\" offset=\"0\"></stop><stop stop-color=\"hsl(230, 55%, 70%)\" offset=\"1\"></stop></linearGradient></defs>"});

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_BUmt0Gwi.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_DKYKYvRT.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro = createAstro();
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feature;
  const { title, description, tech = [], image, repo, demo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<pre>${JSON.stringify({ title, description, tech, image, repo, demo }, null, 2)}</pre> <article class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-48 object-cover rounded-md mb-4"> <h3 class="text-xl font-semibold mb-2">${title}</h3> <p class="text-gray-600 mb-4">${description}</p> <div class="flex flex-wrap gap-2 mb-4"> ${tech.map((t) => renderTemplate`<span class="bg-gray-100 text-sm px-2 py-1 rounded"${addAttribute(t, "key")}>${t}</span>`)} </div> <div class="flex gap-4"> <a${addAttribute(demo, "href")} target="_blank" class="text-blue-500 font-medium">${renderComponent($$result, "Eye", Eye, {})}</a> <a${addAttribute(repo, "href")} target="_blank" class="text-gray-700 font-medium"> ${renderComponent($$result, "BookDashed", BookDashed, {})}</a> </div> </article>`;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/components/Feature.astro", void 0);

const $$Template = createComponent(async ($$result, $$props, $$slots) => {
  const templates = await getCollection("templates");
  const featured = templates.filter((item) => item.data.featured);
  return renderTemplate`${maybeRenderHead()}<section class="text-center py-16 mt-24 mb-60 relative justify-center items-center"> <h2 id="Destacado" class="mb-48 text-6xl font-bold block text-center bg-gradient-to-l from-45% from-blue-900 to-65% to-blue-950 bg-clip-text text-transparent">Destacados</h2> <span class="absolute -z-10 -top-36 right-2/6"> ${renderComponent($$result, "Line", Line, { "width": 600, "height": 600 })}</span> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"> ${featured.map((template) => renderTemplate`${renderComponent($$result, "Feature", $$Feature, { "title": template.data.title, "description": template.data.description, "tech": template.data.tech, "image": template.data.image, "repo": template.data.repo, "demo": template.data.demo })}`)} </div> </section>`;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/Content/Template.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/components/Gallery.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "FeatureCard", $$Template, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ` })}`;
}, "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/pages/index.astro", void 0);

const $$file = "C:/Users/c0d3/Documents/DevTemplates/DevTemplates/DevTemplates/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
