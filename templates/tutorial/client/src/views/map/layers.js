/**
 * Map of layerId -> Layer
 *
 * Layer may be a memoized function that accepts the `db` as an argument and returns a DeckGL.Layer
 *
 * `layerId` should correspond to the values set in `db.showLayers[layerId]`.
 * MAP_LAYERS[layerId] is rendered whenever showLayers[layerId] is true.
 *
 */
import { getStoresLayer } from '../../stores/selectors'
import { IconLayer } from 'deck.gl'

const keyLocations = [{
  iconImageURL: 'data:image/png;base64,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',
  latLng: [42.3611499, -71.0870345]
}]

export const MAP_LAYERS = {
  stores: getStoresLayer,
  ctl: () => new IconLayer({
    id: 'ctl',
    data: keyLocations,
    getSize: ()=>20,
    getIcon: d => ({
      url: d.iconImageURL,
      width: 54,
      height: 86,
      // anchorY: 128
    }),
    getPosition: d => d.latLng.reverse()
  })

}
