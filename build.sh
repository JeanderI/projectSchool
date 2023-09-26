# build.sh
# exit on error
set -o errexit

echo "Running 'yarn'..."
yarn

echo "Running 'yarn build'..."
yarn build

echo "Running 'yarn typeorm migration:run -d dist/data-source'..."
yarn typeorm migration:run -d dist/data-source