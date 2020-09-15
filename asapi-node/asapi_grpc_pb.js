// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var asapi_asapi_pb = require('../asapi/asapi_pb.js');
var github_com_gogo_protobuf_gogoproto_gogo_pb = require('../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_asapi_api_CheckAddressRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.CheckAddressRepose)) {
    throw new Error('Expected argument of type asapi.api.CheckAddressRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_CheckAddressRepose(buffer_arg) {
  return asapi_asapi_pb.CheckAddressRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_CheckAddressRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.CheckAddressRequest)) {
    throw new Error('Expected argument of type asapi.api.CheckAddressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_CheckAddressRequest(buffer_arg) {
  return asapi_asapi_pb.CheckAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetCoinInfoRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetCoinInfoRepose)) {
    throw new Error('Expected argument of type asapi.api.GetCoinInfoRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetCoinInfoRepose(buffer_arg) {
  return asapi_asapi_pb.GetCoinInfoRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetCoinInfoRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetCoinInfoRequest)) {
    throw new Error('Expected argument of type asapi.api.GetCoinInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetCoinInfoRequest(buffer_arg) {
  return asapi_asapi_pb.GetCoinInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetConfirmedTxRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetConfirmedTxRepose)) {
    throw new Error('Expected argument of type asapi.api.GetConfirmedTxRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetConfirmedTxRepose(buffer_arg) {
  return asapi_asapi_pb.GetConfirmedTxRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetConfirmedTxRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetConfirmedTxRequest)) {
    throw new Error('Expected argument of type asapi.api.GetConfirmedTxRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetConfirmedTxRequest(buffer_arg) {
  return asapi_asapi_pb.GetConfirmedTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetUnConfirmedTxRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetUnConfirmedTxRepose)) {
    throw new Error('Expected argument of type asapi.api.GetUnConfirmedTxRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetUnConfirmedTxRepose(buffer_arg) {
  return asapi_asapi_pb.GetUnConfirmedTxRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetUnConfirmedTxRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetUnConfirmedTxRequest)) {
    throw new Error('Expected argument of type asapi.api.GetUnConfirmedTxRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetUnConfirmedTxRequest(buffer_arg) {
  return asapi_asapi_pb.GetUnConfirmedTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetWithdrawDetailRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetWithdrawDetailRepose)) {
    throw new Error('Expected argument of type asapi.api.GetWithdrawDetailRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetWithdrawDetailRepose(buffer_arg) {
  return asapi_asapi_pb.GetWithdrawDetailRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_GetWithdrawDetailRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.GetWithdrawDetailRequest)) {
    throw new Error('Expected argument of type asapi.api.GetWithdrawDetailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_GetWithdrawDetailRequest(buffer_arg) {
  return asapi_asapi_pb.GetWithdrawDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_HasAddressRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.HasAddressRepose)) {
    throw new Error('Expected argument of type asapi.api.HasAddressRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_HasAddressRepose(buffer_arg) {
  return asapi_asapi_pb.HasAddressRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_HasAddressRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.HasAddressRequest)) {
    throw new Error('Expected argument of type asapi.api.HasAddressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_HasAddressRequest(buffer_arg) {
  return asapi_asapi_pb.HasAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListAllAddressRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListAllAddressRepose)) {
    throw new Error('Expected argument of type asapi.api.ListAllAddressRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListAllAddressRepose(buffer_arg) {
  return asapi_asapi_pb.ListAllAddressRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListAllAddressRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListAllAddressRequest)) {
    throw new Error('Expected argument of type asapi.api.ListAllAddressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListAllAddressRequest(buffer_arg) {
  return asapi_asapi_pb.ListAllAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListAllCoinRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListAllCoinRepose)) {
    throw new Error('Expected argument of type asapi.api.ListAllCoinRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListAllCoinRepose(buffer_arg) {
  return asapi_asapi_pb.ListAllCoinRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListAllCoinRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListAllCoinRequest)) {
    throw new Error('Expected argument of type asapi.api.ListAllCoinRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListAllCoinRequest(buffer_arg) {
  return asapi_asapi_pb.ListAllCoinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListConfirmedTxRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListConfirmedTxRepose)) {
    throw new Error('Expected argument of type asapi.api.ListConfirmedTxRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListConfirmedTxRepose(buffer_arg) {
  return asapi_asapi_pb.ListConfirmedTxRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListConfirmedTxRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListConfirmedTxRequest)) {
    throw new Error('Expected argument of type asapi.api.ListConfirmedTxRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListConfirmedTxRequest(buffer_arg) {
  return asapi_asapi_pb.ListConfirmedTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListUnConfirmedTxRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListUnConfirmedTxRepose)) {
    throw new Error('Expected argument of type asapi.api.ListUnConfirmedTxRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListUnConfirmedTxRepose(buffer_arg) {
  return asapi_asapi_pb.ListUnConfirmedTxRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_ListUnConfirmedTxRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.ListUnConfirmedTxRequest)) {
    throw new Error('Expected argument of type asapi.api.ListUnConfirmedTxRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_ListUnConfirmedTxRequest(buffer_arg) {
  return asapi_asapi_pb.ListUnConfirmedTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_NewDepositAddressRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.NewDepositAddressRepose)) {
    throw new Error('Expected argument of type asapi.api.NewDepositAddressRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_NewDepositAddressRepose(buffer_arg) {
  return asapi_asapi_pb.NewDepositAddressRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_NewDepositAddressRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.NewDepositAddressRequest)) {
    throw new Error('Expected argument of type asapi.api.NewDepositAddressRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_NewDepositAddressRequest(buffer_arg) {
  return asapi_asapi_pb.NewDepositAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_NewWithdrawRepose(arg) {
  if (!(arg instanceof asapi_asapi_pb.NewWithdrawRepose)) {
    throw new Error('Expected argument of type asapi.api.NewWithdrawRepose');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_NewWithdrawRepose(buffer_arg) {
  return asapi_asapi_pb.NewWithdrawRepose.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asapi_api_NewWithdrawRequest(arg) {
  if (!(arg instanceof asapi_asapi_pb.NewWithdrawRequest)) {
    throw new Error('Expected argument of type asapi.api.NewWithdrawRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asapi_api_NewWithdrawRequest(buffer_arg) {
  return asapi_asapi_pb.NewWithdrawRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AsApiService = exports.AsApiService = {
  // 获取所有coin的信息及余额
  listAllCoinInfo: {
    path: '/asapi.api.AsApi/ListAllCoinInfo',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.ListAllCoinRequest,
    responseType: asapi_asapi_pb.ListAllCoinRepose,
    requestSerialize: serialize_asapi_api_ListAllCoinRequest,
    requestDeserialize: deserialize_asapi_api_ListAllCoinRequest,
    responseSerialize: serialize_asapi_api_ListAllCoinRepose,
    responseDeserialize: deserialize_asapi_api_ListAllCoinRepose,
  },
  // 获取指定coin钱包信息及余额
  getCoinInfo: {
    path: '/asapi.api.AsApi/GetCoinInfo',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.GetCoinInfoRequest,
    responseType: asapi_asapi_pb.GetCoinInfoRepose,
    requestSerialize: serialize_asapi_api_GetCoinInfoRequest,
    requestDeserialize: deserialize_asapi_api_GetCoinInfoRequest,
    responseSerialize: serialize_asapi_api_GetCoinInfoRepose,
    responseDeserialize: deserialize_asapi_api_GetCoinInfoRepose,
  },
  // 生成新的充值地址
  newDepositAddress: {
    path: '/asapi.api.AsApi/NewDepositAddress',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.NewDepositAddressRequest,
    responseType: asapi_asapi_pb.NewDepositAddressRepose,
    requestSerialize: serialize_asapi_api_NewDepositAddressRequest,
    requestDeserialize: deserialize_asapi_api_NewDepositAddressRequest,
    responseSerialize: serialize_asapi_api_NewDepositAddressRepose,
    responseDeserialize: deserialize_asapi_api_NewDepositAddressRepose,
  },
  // 验证地址归属 即地址存在否
  hasAddress: {
    path: '/asapi.api.AsApi/HasAddress',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.HasAddressRequest,
    responseType: asapi_asapi_pb.HasAddressRepose,
    requestSerialize: serialize_asapi_api_HasAddressRequest,
    requestDeserialize: deserialize_asapi_api_HasAddressRequest,
    responseSerialize: serialize_asapi_api_HasAddressRepose,
    responseDeserialize: deserialize_asapi_api_HasAddressRepose,
  },
  // 验证地址合法性
  checkAddress: {
    path: '/asapi.api.AsApi/CheckAddress',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.CheckAddressRequest,
    responseType: asapi_asapi_pb.CheckAddressRepose,
    requestSerialize: serialize_asapi_api_CheckAddressRequest,
    requestDeserialize: deserialize_asapi_api_CheckAddressRequest,
    responseSerialize: serialize_asapi_api_CheckAddressRepose,
    responseDeserialize: deserialize_asapi_api_CheckAddressRepose,
  },
  // 查看地址总表
  listAllAddress: {
    path: '/asapi.api.AsApi/ListAllAddress',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.ListAllAddressRequest,
    responseType: asapi_asapi_pb.ListAllAddressRepose,
    requestSerialize: serialize_asapi_api_ListAllAddressRequest,
    requestDeserialize: deserialize_asapi_api_ListAllAddressRequest,
    responseSerialize: serialize_asapi_api_ListAllAddressRepose,
    responseDeserialize: deserialize_asapi_api_ListAllAddressRepose,
  },
  // 获取已入账交易详情
  getConfirmedTx: {
    path: '/asapi.api.AsApi/GetConfirmedTx',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.GetConfirmedTxRequest,
    responseType: asapi_asapi_pb.GetConfirmedTxRepose,
    requestSerialize: serialize_asapi_api_GetConfirmedTxRequest,
    requestDeserialize: deserialize_asapi_api_GetConfirmedTxRequest,
    responseSerialize: serialize_asapi_api_GetConfirmedTxRepose,
    responseDeserialize: deserialize_asapi_api_GetConfirmedTxRepose,
  },
  // 获取已入账交易列表
  listConfirmedTx: {
    path: '/asapi.api.AsApi/ListConfirmedTx',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.ListConfirmedTxRequest,
    responseType: asapi_asapi_pb.ListConfirmedTxRepose,
    requestSerialize: serialize_asapi_api_ListConfirmedTxRequest,
    requestDeserialize: deserialize_asapi_api_ListConfirmedTxRequest,
    responseSerialize: serialize_asapi_api_ListConfirmedTxRepose,
    responseDeserialize: deserialize_asapi_api_ListConfirmedTxRepose,
  },
  // 获取未入账交易详情
  getUnConfirmedTx: {
    path: '/asapi.api.AsApi/GetUnConfirmedTx',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.GetUnConfirmedTxRequest,
    responseType: asapi_asapi_pb.GetUnConfirmedTxRepose,
    requestSerialize: serialize_asapi_api_GetUnConfirmedTxRequest,
    requestDeserialize: deserialize_asapi_api_GetUnConfirmedTxRequest,
    responseSerialize: serialize_asapi_api_GetUnConfirmedTxRepose,
    responseDeserialize: deserialize_asapi_api_GetUnConfirmedTxRepose,
  },
  // 获取未入账交易列表
  listUnConfirmedTx: {
    path: '/asapi.api.AsApi/ListUnConfirmedTx',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.ListUnConfirmedTxRequest,
    responseType: asapi_asapi_pb.ListUnConfirmedTxRepose,
    requestSerialize: serialize_asapi_api_ListUnConfirmedTxRequest,
    requestDeserialize: deserialize_asapi_api_ListUnConfirmedTxRequest,
    responseSerialize: serialize_asapi_api_ListUnConfirmedTxRepose,
    responseDeserialize: deserialize_asapi_api_ListUnConfirmedTxRepose,
  },
  // 申请提现
  newWithdraw: {
    path: '/asapi.api.AsApi/NewWithdraw',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.NewWithdrawRequest,
    responseType: asapi_asapi_pb.NewWithdrawRepose,
    requestSerialize: serialize_asapi_api_NewWithdrawRequest,
    requestDeserialize: deserialize_asapi_api_NewWithdrawRequest,
    responseSerialize: serialize_asapi_api_NewWithdrawRepose,
    responseDeserialize: deserialize_asapi_api_NewWithdrawRepose,
  },
  // 查看提现详情
  getWithdrawDetail: {
    path: '/asapi.api.AsApi/GetWithdrawDetail',
    requestStream: false,
    responseStream: false,
    requestType: asapi_asapi_pb.GetWithdrawDetailRequest,
    responseType: asapi_asapi_pb.GetWithdrawDetailRepose,
    requestSerialize: serialize_asapi_api_GetWithdrawDetailRequest,
    requestDeserialize: deserialize_asapi_api_GetWithdrawDetailRequest,
    responseSerialize: serialize_asapi_api_GetWithdrawDetailRepose,
    responseDeserialize: deserialize_asapi_api_GetWithdrawDetailRepose,
  },
};

exports.AsApiClient = grpc.makeGenericClientConstructor(AsApiService);
