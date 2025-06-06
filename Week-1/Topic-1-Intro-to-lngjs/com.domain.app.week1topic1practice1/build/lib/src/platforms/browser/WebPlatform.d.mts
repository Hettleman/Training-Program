/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2022 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Stage from "../../tree/Stage.mjs";
import TextureSource from "../../tree/TextureSource.mjs";
import type StaticCanvasTexture from "../../textures/StaticCanvasTexture.mjs";

export default class WebPlatform {
  destroy(): void;
  getDrawingCanvas(): HTMLCanvasElement;
  getTextureOptionsForDrawingCanvas(
    canvas: HTMLCanvasElement,
  ): TextureSource.LoadOptions;
  init(stage: Stage): void;
  loadSrcTexture(
    options: { hasAlpha: boolean; src: string },
    cb: TextureSource.LoaderCallback,
  ): TextureSource.LoadCancelCallback;
  loop(): void;
  nextFrame(changes: boolean): void;
  startLoop(): void;
  stopLoop(): void;
  uploadGlTexture(
    gl: WebGLRenderingContext,
    textureSource: TextureSource,
    source: TextureSource.NativeTexture,
    options: unknown,
  ): void;
  getHrTime(): number;
  createSvg?: (cb: StaticCanvasTexture.FactoryCallback, stage: Stage, url: string, w: number, h: number) => void;
}
