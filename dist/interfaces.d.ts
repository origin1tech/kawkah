/// <reference types="node" />
import { KawkahCore } from './core';
import { IKawhakParserOptions, IKawkahParserResult, IKawhakParserBaseOptions, KawkahParserType } from 'kawkah-parser';
import { IAnsiStyles } from 'colurs';
import { ITablurColumn } from 'tablur';
export { IKawhakParserOptions, IKawkahParserResult };
export { IAnsiStyles } from 'colurs';
export declare type AnsiStyles = keyof IAnsiStyles;
export declare type RecordMap<K extends string, T, U> = T & Record<K, U>;
export declare type JoinMap<T, U> = T & U;
export interface IKawkahMap<T> {
    [key: string]: T;
}
export interface ITest {
}
export declare type KawkahHandler = (val: any, context?: KawkahCore) => any;
export declare type KawkahIsTypeHandler = (val: any) => boolean;
export declare type KawkahAction = (...args: any[]) => void;
export declare type KawkahResultAction = (result?: IKawkahResult, context?: KawkahCore) => void;
export declare type KawkahOptionType = KawkahParserType;
export declare type KawkahMiddlewareOld = (result?: IKawkahResult, command?: IKawkahCommandInternal, context?: KawkahCore) => any;
export declare type KawkahCallback = (err?: Error, data?: any) => void;
export declare type KawkahHelpHandler = (groups?: string[], context?: KawkahCore) => void;
export declare type KawkahLogHandler = (type?: any, message?: any, ...args: any[]) => void;
export declare type KawkahCompletionsCallback = (completions: any[]) => void;
export declare type KawkahCompletionsHandler = (query: IKawkahCompletionQuery, done?: KawkahCompletionsCallback) => any[];
export declare type KawkahValidateHandler = (val?: any, key?: string, option?: IKawkahOption, context?: KawkahCore) => string | boolean | Error;
export declare type KawkahValidate = RegExp | KawkahValidateHandler | IKawkahValidateConfig;
export declare type KawkahParser = (argv: string | string[], options?: IKawkahOptionsInternal) => IKawkahResult;
export declare type KawkahFormatMessageCallback = (key: string, data: IKawkahFormatMessage) => string;
export declare type KawkahReduceCallback = <T, U>(current: T, accumulator: U, index: number, array: T[]) => U;
export declare type KawkahCommandKeys = keyof IKawkahCommand;
export declare type KawkahCommandInternalKeys = keyof IKawkahCommandInternal;
export declare type KawkahOptionKeys = keyof IKawkahOption;
export declare type KawkahOptionInternalKeys = keyof IKawkahOptionInternal;
export declare type KawkahOptionsKeys = keyof IKawkahOptions;
export declare type KawkahOptionsInternalKeys = keyof IKawkahOptionsInternal;
export declare type KawkahHelpMetadataKeys = keyof IKawkahHelpMetadata;
export declare type KawkahStyleKeys = keyof IKawkahStyles;
export declare type KawkahThemeSytleKeys = keyof IKawkahTheme;
export declare type KawkahThemeKeys = keyof IKawkahThemes;
export declare type KawkahAnsiType = string | AnsiStyles | AnsiStyles[];
export declare type KawkahResultMiddleware = (result: IKawkahResult, event?: IKawkahMiddlewareEventResult, context?: KawkahCore) => IKawkahResult | Error;
export declare type KawkahOptionMiddleware = (val: any, key?: string, event?: IKawkahMiddlewareEventOption, context?: KawkahCore) => any;
export declare type KawkahMiddleware = <T>(val: any, ...args: any[]) => T;
export declare type KawkahMiddlwareHandler = KawkahResultMiddleware | KawkahOptionMiddleware | KawkahMiddleware;
export declare enum KawkahMiddlewareGroup {
    AfterParsed = "AfterParsed",
    BeforeValidate = "BeforeValidate",
    Validate = "Validate",
    AfterValidate = "AfterValidate",
    BeforeAction = "BeforeAction"
}
export interface IKawkahMiddleware {
    readonly name: string;
    group?: KawkahMiddlewareGroup;
    commands?: string[];
    enabled?: boolean;
    extend?: boolean;
    handler: KawkahMiddlwareHandler;
    [key: string]: any;
}
export declare enum KawkahHelpScheme {
    None = "none",
    Default = "default",
    Commands = "commands"
}
export declare enum KawkahGroupKeys {
    Commands = "Commands",
    Arguments = "Arguments",
    Flags = "Flags",
    Examples = "Examples"
}
export declare enum KawkahEvent {
    Error = "Error",
    Warning = "Warning",
    Notify = "Notify",
    Ok = "Ok",
    Help = "Help",
    Catch = "Catch"
}
export interface IKawkahValidateConfig {
    message?: string;
    handler?: RegExp | KawkahValidateHandler;
}
export interface IKawkahTheme {
    header?: KawkahAnsiType;
    label?: KawkahAnsiType;
    title?: KawkahAnsiType;
    usage?: KawkahAnsiType;
    alias?: KawkahAnsiType;
    argument?: KawkahAnsiType;
    flag?: KawkahAnsiType;
    describe?: KawkahAnsiType;
    type?: KawkahAnsiType;
    variadic?: KawkahAnsiType;
    required?: KawkahAnsiType;
    footer?: KawkahAnsiType;
}
export interface IKawkahThemes {
    default: IKawkahTheme;
    dim: IKawkahTheme;
    bright: IKawkahTheme;
}
export interface IKawkahStyles {
    primary?: KawkahAnsiType;
    accent?: KawkahAnsiType;
    muted?: KawkahAnsiType;
    error?: KawkahAnsiType;
    warning?: KawkahAnsiType;
    notify?: KawkahAnsiType;
    ok?: KawkahAnsiType;
}
export interface IKawkahLocaleMap {
    toArray(...filters: any[]): any[];
    format(str: string, ...args: any[]): string;
}
export interface IKawkahHelpMetadata {
    header?: string | string[] | ITablurColumn | ITablurColumn[];
    footer?: string | string[] | ITablurColumn | ITablurColumn[];
}
export interface IKawkahFormatMessage {
    match: string;
    key: string;
    raw: any;
    val: any;
    obj: IKawkahMap<any>;
    colorize: boolean;
}
export interface IKawkahCompletionQuery {
    line?: string[];
    words?: number;
    point?: number;
    partial?: string;
    lastPartial?: string;
    prev?: string;
    last?: string;
}
export interface IKawkahAssert {
    type(val: any, type: string, err: string | Error): any;
    equals(val: any, comparator: any, err: string | Error): any;
    notEquals(val: any, comparator: any, err: string | Error): any;
}
export interface IKawkahGroup {
    title?: string;
    isCommand?: boolean;
    items?: string | string[];
    indent?: number;
    enabled?: boolean;
    sort?: boolean;
}
export interface IKawkahOptionBase {
    type?: KawkahOptionType;
    index?: true | number;
    alias?: string | string[];
    describe?: string;
    demand?: string | string[];
    deny?: string | string[];
    default?: any;
    required?: boolean;
    coerce?: KawkahHandler;
    validate?: KawkahValidate;
    variadic?: number | boolean;
    help?: string | boolean | KawkahHandler;
    completions?: string | string[];
    extend?: any;
    skip?: boolean;
}
/**
 * Contains all properties for arg and flag option types.
 */
export interface IKawkahOption extends IKawkahOptionBase {
}
export interface IKawkahOptionInternal extends IKawkahOption {
    name?: string;
    index?: number;
    alias?: string[];
    demand?: string[];
    deny?: string[];
    completions?: string[];
    extend?: true | string[];
    static?: any;
    validate?: IKawkahValidateConfig;
    action?: KawkahResultAction;
}
export interface IKawkahCommand {
    usage?: string;
    describe?: string;
    alias?: string | string[];
    options?: IKawkahMap<string | IKawkahOption>;
    help?: string | boolean | KawkahHandler;
    spread?: boolean;
    external?: string;
    skip?: boolean;
    abort?: boolean;
    minArgs?: number;
    maxArgs?: number;
    minFlags?: number;
    maxFlags?: number;
    action?: KawkahAction;
}
export interface IKawkahCommandInternal extends IKawkahCommand {
    name?: string;
    args?: string[];
    alias?: string[];
    options?: IKawkahMap<IKawkahOptionInternal>;
}
export interface IKawkahOptionsBase {
    name?: string;
    locale?: string;
    output?: NodeJS.WritableStream;
    parser?: KawkahParser;
    scheme?: KawkahHelpScheme;
    theme?: KawkahThemeKeys | IKawkahTheme;
    colorize?: boolean;
    spread?: boolean;
    stacktrace?: boolean;
    throw?: boolean;
    terminate?: boolean;
    examples?: IKawkahMap<string>;
    commands?: IKawkahMap<string | IKawkahCommand>;
    timestampFormat?: string;
    logFormat?: string;
    middleware?: string[];
    styles?: IKawkahStyles;
    strict?: boolean;
}
/**
 * All Kawkah options passed by user for configuration.
 */
export interface IKawkahOptions extends IKawkahOptionsBase, IKawkahCommand, IKawhakParserBaseOptions {
}
/**
 * Internal options interface stripping out default command options.
 */
export interface IKawkahOptionsInternal extends IKawkahOptionsBase, IKawhakParserOptions {
    theme?: {
        header?: AnsiStyles[];
        label?: AnsiStyles[];
        title?: AnsiStyles[];
        usage?: AnsiStyles[];
        alias?: AnsiStyles[];
        argument?: AnsiStyles[];
        option?: AnsiStyles[];
        describe?: AnsiStyles[];
        type?: AnsiStyles[];
        variadic?: AnsiStyles[];
        required?: AnsiStyles[];
        footer?: AnsiStyles[];
    };
    styles?: {
        primary?: AnsiStyles[];
        accent?: AnsiStyles[];
        muted?: AnsiStyles[];
        alert?: AnsiStyles[];
        warning?: AnsiStyles[];
        notify?: AnsiStyles[];
    };
}
export interface IKawkahNormalized {
    first?: string;
    command?: IKawkahCommandInternal;
    defaultCommand?: IKawkahCommandInternal;
    argv?: string[];
    actionKeys?: string[];
}
export interface IKawkahValidateResult {
    anonymous?: any[];
    stripped?: any[];
    spread?: any[];
    variadics?: any[];
    errors?: any[];
    options?: IKawkahMap<any>;
}
export interface IKawkahResult extends IKawkahParserResult {
    $0?: string;
    $command?: string;
}
export interface IKawkahMiddlewareEventBase {
    start?: number;
    completed?: number;
    elapsed?: number;
    result?: IKawkahResult;
    command?: IKawkahCommandInternal;
}
export interface IKawkahMiddlewareEventResult extends IKawkahMiddlewareEventBase {
}
export interface IKawkahMiddlewareEventOption extends IKawkahMiddlewareEventBase {
    isArg?: boolean;
    isFlag?: boolean;
    isPresent?: boolean;
    option?: IKawkahOptionInternal;
}
export interface IKawkahMiddlewareEvent extends IKawkahMiddlewareEventResult, IKawkahMiddlewareEventOption {
}
