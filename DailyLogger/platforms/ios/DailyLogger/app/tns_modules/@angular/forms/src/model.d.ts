import { Observable } from 'rxjs/Observable';
import { AsyncValidatorFn, ValidationErrors, ValidatorFn } from './directives/validators';
/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
export declare const VALID = "VALID";
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
export declare const INVALID = "INVALID";
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
export declare const PENDING = "PENDING";
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
export declare const DISABLED = "DISABLED";
/**
 * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
 * {@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @stable
 */
export declare abstract class AbstractControl {
    validator: ValidatorFn;
    asyncValidator: AsyncValidatorFn;
    private _valueChanges;
    private _statusChanges;
    private _status;
    private _errors;
    private _pristine;
    private _touched;
    private _parent;
    private _asyncValidationSubscription;
    constructor(validator: ValidatorFn, asyncValidator: AsyncValidatorFn);
    /**
     * The value of the control.
     */
    readonly value: any;
    /**
     * The parent control.
     */
    readonly parent: FormGroup | FormArray;
    /**
     * The validation status of the control. There are four possible
     * validation statuses:
     *
     * * **VALID**:  control has passed all validation checks
     * * **INVALID**: control has failed at least one validation check
     * * **PENDING**: control is in the midst of conducting a validation check
     * * **DISABLED**: control is exempt from validation checks
     *
     * These statuses are mutually exclusive, so a control cannot be
     * both valid AND invalid or invalid AND disabled.
     */
    readonly status: string;
    /**
     * A control is `valid` when its `status === VALID`.
     *
     * In order to have this status, the control must have passed all its
     * validation checks.
     */
    readonly valid: boolean;
    /**
     * A control is `invalid` when its `status === INVALID`.
     *
     * In order to have this status, the control must have failed
     * at least one of its validation checks.
     */
    readonly invalid: boolean;
    /**
     * A control is `pending` when its `status === PENDING`.
     *
     * In order to have this status, the control must be in the
     * middle of conducting a validation check.
     */
    readonly pending: boolean;
    /**
     * A control is `disabled` when its `status === DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     */
    readonly disabled: boolean;
    /**
     * A control is `enabled` as long as its `status !== DISABLED`.
     *
     * In other words, it has a status of `VALID`, `INVALID`, or
     * `PENDING`.
     */
    readonly enabled: boolean;
    /**
     * Returns any errors generated by failing validation. If there
     * are no errors, it will return null.
     */
    readonly errors: ValidationErrors | null;
    /**
     * A control is `pristine` if the user has not yet changed
     * the value in the UI.
     *
     * Note that programmatic changes to a control's value will
     * *not* mark it dirty.
     */
    readonly pristine: boolean;
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * Note that programmatic changes to a control's value will
     * *not* mark it dirty.
     */
    readonly dirty: boolean;
    /**
    * A control is marked `touched` once the user has triggered
    * a `blur` event on it.
    */
    readonly touched: boolean;
    /**
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     */
    readonly untouched: boolean;
    /**
     * Emits an event every time the value of the control changes, in
     * the UI or programmatically.
     */
    readonly valueChanges: Observable<any>;
    /**
     * Emits an event every time the validation status of the control
     * is re-calculated.
     */
    readonly statusChanges: Observable<any>;
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     */
    setValidators(newValidator: ValidatorFn | ValidatorFn[]): void;
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     */
    setAsyncValidators(newValidator: AsyncValidatorFn | AsyncValidatorFn[]): void;
    /**
     * Empties out the sync validator list.
     */
    clearValidators(): void;
    /**
     * Empties out the async validator list.
     */
    clearAsyncValidators(): void;
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     */
    markAsTouched({onlySelf}?: {
        onlySelf?: boolean;
    }): void;
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     */
    markAsUntouched({onlySelf}?: {
        onlySelf?: boolean;
    }): void;
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     */
    markAsDirty({onlySelf}?: {
        onlySelf?: boolean;
    }): void;
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     */
    markAsPristine({onlySelf}?: {
        onlySelf?: boolean;
    }): void;
    /**
     * Marks the control as `pending`.
     */
    markAsPending({onlySelf}?: {
        onlySelf?: boolean;
    }): void;
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     */
    disable({onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     */
    enable({onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    private _updateAncestors(onlySelf);
    setParent(parent: FormGroup | FormArray): void;
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     */
    abstract setValue(value: any, options?: Object): void;
    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     */
    abstract patchValue(value: any, options?: Object): void;
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     */
    abstract reset(value?: any, options?: Object): void;
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     */
    updateValueAndValidity({onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    private _setInitialStatus();
    private _runValidator();
    private _runAsyncValidator(emitEvent);
    private _cancelExistingSubscription();
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    setErrors(errors: ValidationErrors | null, {emitEvent}?: {
        emitEvent?: boolean;
    }): void;
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    get(path: Array<string | number> | string): AbstractControl;
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     */
    getError(errorCode: string, path?: string[]): any;
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     */
    hasError(errorCode: string, path?: string[]): boolean;
    /**
     * Retrieves the top-level ancestor of this control.
     */
    readonly root: AbstractControl;
    private _calculateStatus();
}
/**
 * @whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {@link FormGroup} and {@link FormArray}.
 *
 * @howToUse
 *
 * When instantiating a {@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 *```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * To include a sync validator (or an array of sync validators) with the control,
 * pass it in as the second argument. Async validators are also supported, but
 * have to be passed in separately as the third arg.
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * See its superclass, {@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `@angular/forms`
 *
 * @stable
 */
export declare class FormControl extends AbstractControl {
    constructor(formState?: any, validator?: ValidatorFn | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]);
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     */
    setValue(value: any, {onlySelf, emitEvent, emitModelToViewChange, emitViewToModelChange}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl.setValue} at this level.
     * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
     * where it does behave differently.
     */
    patchValue(value: any, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     */
    reset(formState?: any, {onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     * Register a listener for change events.
     */
    registerOnChange(fn: Function): void;
    /**
     * Register a listener for disabled events.
     */
    registerOnDisabledChange(fn: (isDisabled: boolean) => void): void;
    private _applyFormState(formState);
}
/**
 * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {@link FormControl} and {@link FormArray}.
 *
 * @howToUse
 *
 * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * * **npm package**: `@angular/forms`
 *
 * @stable
 */
export declare class FormGroup extends AbstractControl {
    controls: {
        [key: string]: AbstractControl;
    };
    constructor(controls: {
        [key: string]: AbstractControl;
    }, validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn);
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update value or validity of the control, so for
     * most cases you'll want to use {@link FormGroup.addControl} instead.
     */
    registerControl(name: string, control: AbstractControl): AbstractControl;
    /**
     * Add a control to this group.
     */
    addControl(name: string, control: AbstractControl): void;
    /**
     * Remove a control from this group.
     */
    removeControl(name: string): void;
    /**
     * Replace an existing control.
     */
    setControl(name: string, control: AbstractControl): void;
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for
     * existence in the group only, use {@link AbstractControl.get} instead.
     */
    contains(controlName: string): boolean;
    /**
     *  Sets the value of the {@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     */
    setValue(value: {
        [key: string]: any;
    }, {onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     *  Patches the value of the {@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     */
    patchValue(value: {
        [key: string]: any;
    }, {onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     * Resets the {@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    reset(value?: any, {onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     * The aggregate value of the {@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     */
    getRawValue(): any;
}
/**
 * @whatItDoes Tracks the value and validity state of an array of {@link FormControl},
 * {@link FormGroup} or {@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {@link FormControl} and {@link FormGroup}.
 *
 * @howToUse
 *
 * When instantiating a {@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators as the second arg, or array-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `@angular/forms`
 *
 * @stable
 */
export declare class FormArray extends AbstractControl {
    controls: AbstractControl[];
    constructor(controls: AbstractControl[], validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn);
    /**
     * Get the {@link AbstractControl} at the given `index` in the array.
     */
    at(index: number): AbstractControl;
    /**
     * Insert a new {@link AbstractControl} at the end of the array.
     */
    push(control: AbstractControl): void;
    /**
     * Insert a new {@link AbstractControl} at the given `index` in the array.
     */
    insert(index: number, control: AbstractControl): void;
    /**
     * Remove the control at the given `index` in the array.
     */
    removeAt(index: number): void;
    /**
     * Replace an existing control.
     */
    setControl(index: number, control: AbstractControl): void;
    /**
     * Length of the control array.
     */
    readonly length: number;
    /**
     *  Sets the value of the {@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     */
    setValue(value: any[], {onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     *  Patches the value of the {@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     */
    patchValue(value: any[], {onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     * Resets the {@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     */
    reset(value?: any, {onlySelf, emitEvent}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     */
    getRawValue(): any[];
    private _registerControl(control);
}
