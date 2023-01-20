// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// ForgotPasswordReader is a Reader for the ForgotPassword structure.
type ForgotPasswordReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ForgotPasswordReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 201:
		result := NewForgotPasswordCreated()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewForgotPasswordBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewForgotPasswordInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewForgotPasswordCreated creates a ForgotPasswordCreated with default headers values
func NewForgotPasswordCreated() *ForgotPasswordCreated {
	return &ForgotPasswordCreated{}
}

/*
ForgotPasswordCreated describes a response with status code 201, with default header values.

forgot password request created
*/
type ForgotPasswordCreated struct {
}

// IsSuccess returns true when this forgot password created response has a 2xx status code
func (o *ForgotPasswordCreated) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this forgot password created response has a 3xx status code
func (o *ForgotPasswordCreated) IsRedirect() bool {
	return false
}

// IsClientError returns true when this forgot password created response has a 4xx status code
func (o *ForgotPasswordCreated) IsClientError() bool {
	return false
}

// IsServerError returns true when this forgot password created response has a 5xx status code
func (o *ForgotPasswordCreated) IsServerError() bool {
	return false
}

// IsCode returns true when this forgot password created response a status code equal to that given
func (o *ForgotPasswordCreated) IsCode(code int) bool {
	return code == 201
}

func (o *ForgotPasswordCreated) Error() string {
	return fmt.Sprintf("[POST /forgotPassword][%d] forgotPasswordCreated ", 201)
}

func (o *ForgotPasswordCreated) String() string {
	return fmt.Sprintf("[POST /forgotPassword][%d] forgotPasswordCreated ", 201)
}

func (o *ForgotPasswordCreated) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewForgotPasswordBadRequest creates a ForgotPasswordBadRequest with default headers values
func NewForgotPasswordBadRequest() *ForgotPasswordBadRequest {
	return &ForgotPasswordBadRequest{}
}

/*
ForgotPasswordBadRequest describes a response with status code 400, with default header values.

forgot password request not created
*/
type ForgotPasswordBadRequest struct {
}

// IsSuccess returns true when this forgot password bad request response has a 2xx status code
func (o *ForgotPasswordBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this forgot password bad request response has a 3xx status code
func (o *ForgotPasswordBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this forgot password bad request response has a 4xx status code
func (o *ForgotPasswordBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this forgot password bad request response has a 5xx status code
func (o *ForgotPasswordBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this forgot password bad request response a status code equal to that given
func (o *ForgotPasswordBadRequest) IsCode(code int) bool {
	return code == 400
}

func (o *ForgotPasswordBadRequest) Error() string {
	return fmt.Sprintf("[POST /forgotPassword][%d] forgotPasswordBadRequest ", 400)
}

func (o *ForgotPasswordBadRequest) String() string {
	return fmt.Sprintf("[POST /forgotPassword][%d] forgotPasswordBadRequest ", 400)
}

func (o *ForgotPasswordBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewForgotPasswordInternalServerError creates a ForgotPasswordInternalServerError with default headers values
func NewForgotPasswordInternalServerError() *ForgotPasswordInternalServerError {
	return &ForgotPasswordInternalServerError{}
}

/*
ForgotPasswordInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type ForgotPasswordInternalServerError struct {
}

// IsSuccess returns true when this forgot password internal server error response has a 2xx status code
func (o *ForgotPasswordInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this forgot password internal server error response has a 3xx status code
func (o *ForgotPasswordInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this forgot password internal server error response has a 4xx status code
func (o *ForgotPasswordInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this forgot password internal server error response has a 5xx status code
func (o *ForgotPasswordInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this forgot password internal server error response a status code equal to that given
func (o *ForgotPasswordInternalServerError) IsCode(code int) bool {
	return code == 500
}

func (o *ForgotPasswordInternalServerError) Error() string {
	return fmt.Sprintf("[POST /forgotPassword][%d] forgotPasswordInternalServerError ", 500)
}

func (o *ForgotPasswordInternalServerError) String() string {
	return fmt.Sprintf("[POST /forgotPassword][%d] forgotPasswordInternalServerError ", 500)
}

func (o *ForgotPasswordInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
