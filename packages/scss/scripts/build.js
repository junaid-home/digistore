const $fs = require("fs");
const $path = require("path");

const sass = require("node-sass");

const options =
  JSON.parse($fs.readFileSync("compiler.config.json", { encoding: "utf8" })) ||
  [];

function compileSass(inputFilePath, outputFilePath) {
  const result = sass.renderSync({
    data: $fs.readFileSync($path.resolve(inputFilePath)).toString(),
    outputStyle: "compressed",
    includePaths: [$path.resolve("src")],
  });

  $fs.writeFileSync($path.resolve(outputFilePath), result.css.toString());
}

function getAllComponentPaths() {
  let allComponents = [];

  options.include.forEach((directory) => {
    const filesInDirectory = $fs.readdirSync(`src/${directory}`);

    const absPaths = filesInDirectory.map((fileName) => {
      $fs.mkdirSync($path.resolve(`${options.outDir}/${directory}`), {
        recursive: true,
      });

      return {
        inputFilePath: $path.resolve("src", directory, fileName),
        outputFilePath: `${options.outDir}/${directory}/${
          fileName.slice(0, -4) + "module.css"
        }`,
      };
    });

    allComponents = [...allComponents, ...absPaths];
  });

  return allComponents;
}

$fs.mkdirSync($path.resolve(options.outDir), { recursive: true });
options.files.forEach((file) => {
  compileSass(`src/${file}`, `${options.outDir}/${file.slice(0, -4) + "css"}`);
});

getAllComponentPaths().forEach((comp) => {
  compileSass(comp.inputFilePath, comp.outputFilePath);
});
