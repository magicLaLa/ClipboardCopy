[@magic-tao/clipboardcopy](../../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [str](default.md#str)

### Methods

- [copy](default.md#copy)
- [copyClipboardApi](default.md#copyclipboardapi)
- [copyExecCommand](default.md#copyexeccommand)
- [customError](default.md#customerror)

## Constructors

### constructor

• **new default**()

## Properties

### str

• `Private` **str**: `string` = `''`

#### Defined in

[index.ts:2](https://github.com/magicLaLa/ClipboardCopy/blob/f0a0d8c/src/index.ts#L2)

## Methods

### copy

▸ **copy**(`text`): `Promise`<`void` \| `Error`\>

复制方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`Promise`<`void` \| `Error`\>

#### Defined in

[index.ts:7](https://github.com/magicLaLa/ClipboardCopy/blob/f0a0d8c/src/index.ts#L7)

___

### copyClipboardApi

▸ `Private` **copyClipboardApi**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:20](https://github.com/magicLaLa/ClipboardCopy/blob/f0a0d8c/src/index.ts#L20)

___

### copyExecCommand

▸ `Private` **copyExecCommand**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Defined in

[index.ts:25](https://github.com/magicLaLa/ClipboardCopy/blob/f0a0d8c/src/index.ts#L25)

___

### customError

▸ `Private` **customError**(): `DOMException`

#### Returns

`DOMException`

#### Defined in

[index.ts:54](https://github.com/magicLaLa/ClipboardCopy/blob/f0a0d8c/src/index.ts#L54)
