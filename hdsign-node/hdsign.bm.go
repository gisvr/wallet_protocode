// Code generated by protoc-gen-bm v0.1, DO NOT EDIT.
// source: hdsign.proto

package pbhdsign

import (
	"context"

	bm "github.com/gisvr/wallet/src/lib/net/http/blademaster"
	"github.com/gisvr/wallet/src/lib/net/http/blademaster/binding"
)

// to suppressed 'imported but not used warning'
var _ *bm.Context
var _ context.Context
var _ binding.StructValidator

var PathHdSignGetMnemonicFingerprinting = "/hdsign.api.HdSign/GetMnemonicFingerprinting"
var PathHdSignGetSecret = "/hdsign.api.HdSign/GetSecret"
var PathHdSignGetMemo = "/hdsign.api.HdSign/GetMemo"

const (
	PermissionGetMnemonicFingerprinting = "PermissionHdSignGetMnemonicFingerprinting"
	PermissionGetSecret                 = "PermissionHdSignGetSecret"
	PermissionGetMemo                   = "PermissionHdSignGetMemo"
)

type Permission struct {
	Module      string
	Name        string
	Url         string
	Description string
}

var Perms = []Permission{
	Permission{"HdSign", PermissionGetMnemonicFingerprinting, PathHdSignGetMnemonicFingerprinting, "钱包私钥特征，用于验证钱包内记录账目的地址和链上的地址是一致的"},
	Permission{"HdSign", PermissionGetSecret, PathHdSignGetSecret, "生成密钥"},
	Permission{"HdSign", PermissionGetMemo, PathHdSignGetMemo, "生成eos的memo"},
}

// HdSignBMServer is the server API for HdSign service.
type HdSignBMServer interface {
	// 钱包私钥特征，用于验证钱包内记录账目的地址和链上的地址是一致的
	GetMnemonicFingerprinting(ctx context.Context, req *GetMnemonicFingerprintingRequest) (resp *GetMnemonicFingerprintingResponse, err error)

	// 生成密钥
	GetSecret(ctx context.Context, req *GetSecretRequest) (resp *GetSecretResponse, err error)

	// 生成eos的memo
	GetMemo(ctx context.Context, req *GetMemoRequest) (resp *GetMemoResponse, err error)
}

var HdSignSvc HdSignBMServer

type JSONReaderFunc func(c *bm.Context, data interface{}, err error)

func DefaultJSONReader(c *bm.Context, data interface{}, err error) {
	c.JSON(data, err)
}

var JF JSONReaderFunc = DefaultJSONReader

func HdSignGetMnemonicFingerprinting(c *bm.Context) {
	p := new(GetMnemonicFingerprintingRequest)
	if err := c.BindWith(p, binding.Default(c.Request.Method, c.Request.Header.Get("Content-Type"))); err != nil {
		return
	}
	resp, err := HdSignSvc.GetMnemonicFingerprinting(c, p)
	JF(c, resp, err)
}

func HdSignGetSecret(c *bm.Context) {
	p := new(GetSecretRequest)
	if err := c.BindWith(p, binding.Default(c.Request.Method, c.Request.Header.Get("Content-Type"))); err != nil {
		return
	}
	resp, err := HdSignSvc.GetSecret(c, p)
	JF(c, resp, err)
}

func HdSignGetMemo(c *bm.Context) {
	p := new(GetMemoRequest)
	if err := c.BindWith(p, binding.Default(c.Request.Method, c.Request.Header.Get("Content-Type"))); err != nil {
		return
	}
	resp, err := HdSignSvc.GetMemo(c, p)
	JF(c, resp, err)
}

// RegisterHdSignBMServer Register the blademaster route
func RegisterHdSignBMServer(e *bm.Engine, server HdSignBMServer) {
	HdSignSvc = server
	e.GET(PathHdSignGetMnemonicFingerprinting, HdSignGetMnemonicFingerprinting)
	e.GET(PathHdSignGetSecret, HdSignGetSecret)
	e.GET(PathHdSignGetMemo, HdSignGetMemo)
}
