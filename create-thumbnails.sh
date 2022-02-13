# Create a pdf thumbnail in PNG format
#
# $ sh create-thumbnails.sh <relative path to pdf from project root>
#
# For example, to create the thumbnail for the set-theory-combinatorics.pdf:
# $ sh create-thumbnails.sh public/notes/discrete-math/set-theory-combinatorics.pdf

# Install pdftk and imagemagick
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sudo add-apt-repository ppa:malteworld/ppa
    sudo apt update
    sudo apt install pdftk imagemagick
elif [[ "$OSTYPE" == "darwin"* ]]; then
    if brew list pdftk-java &>/dev/null; then
        echo "pdftk-java is already installed"
    else
        brew install pdftk-java
    fi

    if brew list imagemagick &>/dev/null; then
        echo "imagemagick is already installed"
    else
        brew install imagemagick
    fi
fi

filePath=$1
fileName=${1##*/}           # get the filename
fileName=${fileName%.*}     # remove the extension
finalFileExtension=".png"
folderPath="${1%/*}/"
thumbnailFolder="thumbnails/"
thumbnailFolderPath="$folderPath$thumbnailFolder"
thumbnailFilePath="$thumbnailFolderPath$fileName$finalFileExtension"
singlePageName="singlePage.pdf"
singlePagePdfPath="$folderPath$singlePageName"

# Create a pdf containing the first page of the given pdf
if [ ! -f "$singlePagePdfPath" ]; then
    pdftk $filePath cat 1 output $singlePagePdfPath
fi

if [ ! -f "$thumbnailFolderPath" ]; then
    mkdir $thumbnailFolderPath
fi

# Create the thumbnail png file
if [ ! -f "$thumbnailFilePath" ]; then
    convert $singlePagePdfPath -background white -alpha remove -alpha off $thumbnailFilePath
    convert $thumbnailFilePath -gravity south -chop 0x350 $thumbnailFilePath
fi

# Remove the singlePagePdf file
rm "$singlePagePdfPath"