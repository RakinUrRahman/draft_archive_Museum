# Museum Image Setup Guide

## How to Add Your Own Images

### 1. **Image Folder Structure**
Your project now has an `images/` folder with placeholder files:
```
images/
├── photograph_1.jpg (placeholder)
├── photograph_2.jpg (placeholder)
├── document_1.jpg (placeholder)
├── document_2.jpg (placeholder)
├── artifact_1.jpg (placeholder)
├── artifact_2.jpg (placeholder)
├── map_1.jpg (placeholder)
└── poster_1.jpg (placeholder)
```

### 2. **Replace Placeholder Files**
Replace the placeholder files with your actual Liberation War images:

**For Photographs:**
- Replace `photograph_1.jpg` and `photograph_2.jpg` with historical photos
- Recommended size: 300x200 pixels or larger
- Examples: Mukti Bahini training, victory parades, refugee camps

**For Documents:**
- Replace `document_1.jpg` and `document_2.jpg` with document scans
- Recommended size: 300x400 pixels for readability
- Examples: Independence proclamation, official documents

**For Artifacts:**
- Replace `artifact_1.jpg` and `artifact_2.jpg` with artifact photos
- Recommended size: 300x300 pixels (square format works well)
- Examples: weapons, uniforms, medals, flags

**For Maps:**
- Replace `map_1.jpg` with historical maps
- Examples: battle strategy maps, sector divisions

**For Posters:**
- Replace `poster_1.jpg` with propaganda posters
- Examples: Joy Bangla posters, memorial posters

### 3. **Supported Image Formats**
- `.jpg` (recommended)
- `.png`
- `.webp`
- `.gif`

### 4. **Adding More Images**
To add more images:

1. **Add the image file** to the `images/` folder
2. **Update the seed function** in `draft.html`:
   - Find the `artifacts` array in the `seed()` function
   - Change the `media` property to point to your new image
   - Example: `media: 'images/your_new_image.jpg'`

### 5. **File Naming Convention**
Use descriptive names:
- `liberation_war_photo_1.jpg`
- `independence_document.jpg`
- `mukti_bahini_uniform.jpg`
- `sector_map_dhaka.jpg`

### 6. **Image Size Guidelines**
- **Thumbnails**: Images will be displayed as 96x72px thumbnails in the grid
- **Original Size**: Keep originals at least 300x200px for good quality
- **File Size**: Keep under 500KB each for good performance

### 7. **After Adding Images**
1. Save your changes
2. Refresh the webpage
3. Clear localStorage if needed (F12 > Application > Storage > Clear)

### 8. **Your Current Setup**
The system is now configured to use:
- Local images from the `images/` folder
- Your existing `Bangladeshi Flag.jpg` for the flag artifact
- Proper error handling if images don't load
- Fallback to category names for missing images

### 9. **Adding New Artifacts**
Use the "New Artifact" button to add artifacts with your own images:
1. Fill in artifact details
2. Use the file upload to select your image
3. The system will handle the rest!

---
**Note**: Replace the placeholder files with your actual Liberation War museum images to see them in the application!
