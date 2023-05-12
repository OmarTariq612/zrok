// Code generated by go-swagger; DO NOT EDIT.

package rest_model_zrok

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// Environment environment
//
// swagger:model environment
type Environment struct {

	// activity
	Activity SparkData `json:"activity,omitempty"`

	// address
	Address string `json:"address,omitempty"`

	// created at
	CreatedAt int64 `json:"createdAt,omitempty"`

	// description
	Description string `json:"description,omitempty"`

	// host
	Host string `json:"host,omitempty"`

	// updated at
	UpdatedAt int64 `json:"updatedAt,omitempty"`

	// z Id
	ZID string `json:"zId,omitempty"`
}

// Validate validates this environment
func (m *Environment) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateActivity(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Environment) validateActivity(formats strfmt.Registry) error {
	if swag.IsZero(m.Activity) { // not required
		return nil
	}

	if err := m.Activity.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("activity")
		} else if ce, ok := err.(*errors.CompositeError); ok {
			return ce.ValidateName("activity")
		}
		return err
	}

	return nil
}

// ContextValidate validate this environment based on the context it is used
func (m *Environment) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateActivity(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Environment) contextValidateActivity(ctx context.Context, formats strfmt.Registry) error {

	if err := m.Activity.ContextValidate(ctx, formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("activity")
		} else if ce, ok := err.(*errors.CompositeError); ok {
			return ce.ValidateName("activity")
		}
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *Environment) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Environment) UnmarshalBinary(b []byte) error {
	var res Environment
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
