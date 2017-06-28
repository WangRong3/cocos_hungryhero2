var res = {
    HelloWorld_png : "res/HelloWorld.png",
    G_Texture_plist:"res/graphics/texture.plist",
    G_Texture_png:"res/graphics/texture.png",
    BGWelcome_png:"res/graphics/bgWelcome.jpg",
    BGLayer_jpg:"res/graphics/bgLayer.jpg",
    Font_fnt:"res/fonts/font.fnt",
    Font_png:"res/fonts/font.png",
    Eat_plist:"res/particles/eat.plist",
    P_Texture_png:"res/particles/texture.png",
    Mushroom_plist:"res/particles/mushroom.plist",
    Coffee_plist:"res/particles/coffee.plist",
    Wind_plist:"res/particles/wind.plist",
    Wind_png:"res/particles/wind.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
