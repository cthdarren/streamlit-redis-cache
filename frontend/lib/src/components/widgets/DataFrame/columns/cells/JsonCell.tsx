/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from "react"

import JSON5 from "json5"
import { getLuminance } from "color2k"
import {
  type CustomCell,
  type CustomRenderer,
  drawTextCell,
  GridCellKind,
  type ProvideEditorCallback,
  TextCellEntry,
} from "@glideapps/glide-data-grid"
import ReactJson from "react-json-view"

import { toSafeString } from "@streamlit/lib/src/components/widgets/DataFrame/columns/utils"
import { isNullOrUndefined } from "@streamlit/lib/src/util/utils"

function toString(value: string | object | undefined | null): string {
  if (typeof value === "string") {
    return value
  }
  try {
    return JSON.stringify(value)
  } catch (error) {
    return toSafeString(value)
  }
}

interface JsonCellProps {
  readonly kind: "json-cell"
  /* The JSON string data or object to display. */
  readonly value: string | object | undefined | null
  /* The stringified JSON to display. */
  readonly displayValue?: string
}

export type JsonCell = CustomCell<JsonCellProps>

export const JsonCellEditor: ReturnType<
  ProvideEditorCallback<JsonCell>
> = cell => {
  const theme = cell.theme

  // if (cell.value.kind === GridCellKind.Text) {
  //   return {
  //     editor: JsonCellEditor,
  //   }
  // }
  const cellData = cell.value.data

  console.log("inside JsonCellEditor", cell, cellData)
  let jsonObject = undefined

  try {
    if (cellData.value) {
      jsonObject =
        typeof cellData.value === "string"
          ? JSON5.parse(cellData.value)
          : JSON5.parse(JSON5.stringify(cellData.value))
    }
  } catch (error) {
    jsonObject = undefined
  }

  if (isNullOrUndefined(jsonObject)) {
    return (
      <TextCellEntry
        highlight={true}
        autoFocus={false}
        disabled={true}
        value={(toString(cellData.value) || cellData.displayValue) ?? ""}
        onChange={() => undefined}
      />
    )
  }

  return (
    <div style={{ padding: theme.cellHorizontalPadding }}>
      <ReactJson
        src={jsonObject}
        collapsed={2}
        theme={getLuminance(theme.bgCell) > 0.5 ? "rjv-default" : "monokai"}
        displayDataTypes={false}
        displayObjectSize={false}
        name={false}
        enableClipboard={true}
        style={{
          fontFamily: theme.fontFamily,
          fontSize: theme.baseFontStyle,
          backgroundColor: theme.bgCell,
          whiteSpace: "pre-wrap", // preserve whitespace
        }}
      />
    </div>
  )
}

const renderer: CustomRenderer<JsonCell> = {
  kind: GridCellKind.Custom,
  isMatch: (c): c is JsonCell => (c.data as any).kind === "json-cell",
  draw: (args, cell) => {
    const { value, displayValue } = cell.data
    drawTextCell(
      args,
      displayValue ?? toString(value) ?? "",
      cell.contentAlign
    )
    return true
  },
  measure: (ctx, cell, theme) => {
    const { value, displayValue } = cell.data
    const displayText = displayValue ?? toString(value) ?? ""
    return (
      (displayText ? ctx.measureText(displayText).width : 0) +
      theme.cellHorizontalPadding * 2
    )
  },
  provideEditor: () => ({
    editor: JsonCellEditor,
  }),
}

export default renderer
