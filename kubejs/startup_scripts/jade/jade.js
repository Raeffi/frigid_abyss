StartupEvents.postInit(event => {
  let $WailaClientRegistration
  if (Platform.isClientEnvironment()) {
    $WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration")
    $WailaClientRegistration.instance().addTooltipCollectedCallback(0, (tooltip, accessor) => {
      global.jadeCallback(tooltip, accessor)
    })
    $WailaClientRegistration.instance().tooltipCollectedCallback.sort()
  }
})

let $ElementHelper = Java.loadClass("snownee.jade.impl.ui.ElementHelper")

global.jadeCallback = (tooltip, accessor) => {
  if (!accessor.hitResult) return

  // Filter to only your target block
  let block = accessor.getBlock()
  if (!block || block.getId() !== "immersivegeology:storage_block_refractory_brick") return

  // Grab the main tooltip line list
  let mainLines = tooltip.getTooltip().get(
    Java.loadClass("net.minecraft.resources.ResourceLocation").of("jade", "object_name")
  )
  if (!mainLines) return

  // Build your custom text component
  let customText = Text.of("§aCustom Info: ").append(Text.of("§ftest"))

  // Wrap it in a Jade IElement and append it
  let customElement = $ElementHelper.INSTANCE.text(customText)
  mainLines.add(customElement)
}