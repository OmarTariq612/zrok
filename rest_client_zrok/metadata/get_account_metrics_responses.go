// Code generated by go-swagger; DO NOT EDIT.

package metadata

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/openziti/zrok/rest_model_zrok"
)

// GetAccountMetricsReader is a Reader for the GetAccountMetrics structure.
type GetAccountMetricsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetAccountMetricsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetAccountMetricsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewGetAccountMetricsBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewGetAccountMetricsInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /metrics/account] getAccountMetrics", response, response.Code())
	}
}

// NewGetAccountMetricsOK creates a GetAccountMetricsOK with default headers values
func NewGetAccountMetricsOK() *GetAccountMetricsOK {
	return &GetAccountMetricsOK{}
}

/*
GetAccountMetricsOK describes a response with status code 200, with default header values.

account metrics
*/
type GetAccountMetricsOK struct {
	Payload *rest_model_zrok.Metrics
}

// IsSuccess returns true when this get account metrics o k response has a 2xx status code
func (o *GetAccountMetricsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get account metrics o k response has a 3xx status code
func (o *GetAccountMetricsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get account metrics o k response has a 4xx status code
func (o *GetAccountMetricsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get account metrics o k response has a 5xx status code
func (o *GetAccountMetricsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get account metrics o k response a status code equal to that given
func (o *GetAccountMetricsOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get account metrics o k response
func (o *GetAccountMetricsOK) Code() int {
	return 200
}

func (o *GetAccountMetricsOK) Error() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsOK  %+v", 200, o.Payload)
}

func (o *GetAccountMetricsOK) String() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsOK  %+v", 200, o.Payload)
}

func (o *GetAccountMetricsOK) GetPayload() *rest_model_zrok.Metrics {
	return o.Payload
}

func (o *GetAccountMetricsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(rest_model_zrok.Metrics)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAccountMetricsBadRequest creates a GetAccountMetricsBadRequest with default headers values
func NewGetAccountMetricsBadRequest() *GetAccountMetricsBadRequest {
	return &GetAccountMetricsBadRequest{}
}

/*
GetAccountMetricsBadRequest describes a response with status code 400, with default header values.

bad request
*/
type GetAccountMetricsBadRequest struct {
}

// IsSuccess returns true when this get account metrics bad request response has a 2xx status code
func (o *GetAccountMetricsBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get account metrics bad request response has a 3xx status code
func (o *GetAccountMetricsBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get account metrics bad request response has a 4xx status code
func (o *GetAccountMetricsBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this get account metrics bad request response has a 5xx status code
func (o *GetAccountMetricsBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this get account metrics bad request response a status code equal to that given
func (o *GetAccountMetricsBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the get account metrics bad request response
func (o *GetAccountMetricsBadRequest) Code() int {
	return 400
}

func (o *GetAccountMetricsBadRequest) Error() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsBadRequest ", 400)
}

func (o *GetAccountMetricsBadRequest) String() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsBadRequest ", 400)
}

func (o *GetAccountMetricsBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetAccountMetricsInternalServerError creates a GetAccountMetricsInternalServerError with default headers values
func NewGetAccountMetricsInternalServerError() *GetAccountMetricsInternalServerError {
	return &GetAccountMetricsInternalServerError{}
}

/*
GetAccountMetricsInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type GetAccountMetricsInternalServerError struct {
}

// IsSuccess returns true when this get account metrics internal server error response has a 2xx status code
func (o *GetAccountMetricsInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get account metrics internal server error response has a 3xx status code
func (o *GetAccountMetricsInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get account metrics internal server error response has a 4xx status code
func (o *GetAccountMetricsInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this get account metrics internal server error response has a 5xx status code
func (o *GetAccountMetricsInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this get account metrics internal server error response a status code equal to that given
func (o *GetAccountMetricsInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the get account metrics internal server error response
func (o *GetAccountMetricsInternalServerError) Code() int {
	return 500
}

func (o *GetAccountMetricsInternalServerError) Error() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsInternalServerError ", 500)
}

func (o *GetAccountMetricsInternalServerError) String() string {
	return fmt.Sprintf("[GET /metrics/account][%d] getAccountMetricsInternalServerError ", 500)
}

func (o *GetAccountMetricsInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}