<?php

namespace app\Manage\controller;

use app\common\controller\Manage;
use Request;
use app\common\model\GoodsType as typeModel;
use app\common\model\GoodsTypeSpec;
use app\common\model\GoodsTypeSpecRel;
use app\common\model\GoodsParams;
use app\common\model\GoodsTypeParams;

/**
 * 商品类型
 * Class GoodsType
 * @package app\Manage\controller
 * User: wjima
 * Email:1457529125@qq.com
 * Date: 2018-01-09 20:07
 */
class GoodsType extends Manage
{

    /**
     * 商品类型列表
     * @return mixed
     */
    public function index()
    {
        if (Request::isAjax()) {
            $typeModel           = new typeModel();
            $filter              = input('request.');
            return $typeModel->tableData($filter);
        }
        return $this->fetch('index');
    }

    /**
     * 添加类型
     * User: wjima
     * Email:1457529125@qq.com
     * Date: 2018-01-09 20:47
     */
    public function add()
    {
        $this->view->engine->layout(false);
        if (Request::isPost()) {
            $return_data = [
                'status' => false,
                'msg'    => '添加失败',
                'data'   => '',
            ];
            //存储添加内容
            $data   = [
                'name'      => input('post.name'),
            ];
            $result = model('common/GoodsType')->add($data);
            if ($result !== false) {
                $return_data = [
                    'status' => true,
                    'msg'    => '添加成功',
                    'data'   => $result,
                ];
            }
            return $return_data;
        }
        //获取添加页面
        return $this->fetch('add');
    }

    /**
     * 商品类型关联属性
     * @return array|mixed
     */
    public function addRel()
    {
        $this->view->engine->layout(false);
        if (!Request::isPost()) {
            $id = input('get.id/d');
            if (!$id) {
                $this->error("关键参数错误"); //todo 统一错误页面
            }
            $typeModel = new typeModel();

            $spec = $typeModel::get($id);
            $this->assign('spec', $spec);

            $typeSpecModel = new GoodsTypeSpec();
            $specList      = $typeSpecModel->getAllSpec();
            $this->assign('specList', $specList);
            //获取已关联属性
            $typeSpecRelModel = new GoodsTypeSpecRel();
            $typeSpec         = $typeSpecRelModel->getRelTypeSpec($id);

            $this->assign('typeSpec', $typeSpec);

            $typeSids = [];
            if ($typeSpec) {
                $typeSids = array_column($typeSpec, 'spec_id');
            }
            $this->assign('typeSids', $typeSids);


            return $this->fetch('addRel');
        } else {
            $return_data = [
                'status' => false,
                'msg'    => '保存失败',
                'data'   => '',
            ];
            //存储添加内容
            $data             = array(
                'type_id' => input('post.type_id/d'),
                'spec_id' => input('post.spec_id/a'),
            );
            $typeSpecRelModel = new GoodsTypeSpecRel();

            $result               = $typeSpecRelModel->updateTypeSpec($data['type_id'], $data['spec_id']);
            if ($result !== false) {
                $return_data = [
                    'status' => true,
                    'msg'    => '保存成功',
                    'data'   => $result,
                ];
            }
            return $return_data;
        }
    }

    /**
     * 编辑类型
     * User: wjima
     * Email:1457529125@qq.com
     * Date: 2018-01-31 9:48
     */
    public function edit()
    {
        $this->view->engine->layout(false);
        $id             = input('get.id/d');
        $goodsTypeModel = new typeModel();
        $typeSpec       = $goodsTypeModel::get($id);
        $this->assign('typeSpec', $typeSpec);
        if (Request::isPost()) {
            $result         = [
                'status' => false,
                'msg'    => '保存失败',
                'data'   => '',
            ];
            $goodsTypeModel = new typeModel();
            $data           = [
                'id'        => input('post.id', 0),
                'name'      => input('post.name', ''),
            ];
            $goodsTypeModel::update($data, ['id' => $data['id']]);

            $result = [
                'status' => true,
                'msg'    => '保存成功',
                'data'   => '',
            ];
            return $result;
        }
        return $this->fetch('edit');
    }

    /**
     * 删除类型
     * User: wjima
     * Email:1457529125@qq.com
     * Date: 2018-01-31 9:48
     */
    public function del()
    {
        $result = [
            'status' => false,
            'msg'    => '删除失败',
            'data'   => '',
        ];
        $id     = input('post.id', 0);
        if ($id) {
            $goodsTypeModel = new typeModel();
            $goodsTypeModel->startTrans();

            if ($goodsTypeModel->where(['id' => $id])->delete()) {
                $typeSpecRelModel = new GoodsTypeSpecRel();

                if (!$typeSpecRelModel::get(['type_id' => $id])) {
                    $goodsTypeModel->commit();
                    $result['status'] = true;
                    $result['msg']    = '删除成功';
                    return $result;
                }
                if ($typeSpecRelModel->where(['type_id' => $id])->delete()) {
                    $result['status'] = true;
                    $result['msg']    = '删除成功';
                    $goodsTypeModel->commit();
                } else {
                    $goodsTypeModel->rollback();
                }
            }
        }
        return $result;
    }

    /**
     * 获取和设置参数
     * @return mixed|string
     */
    public function addParams()
    {
        $this->view->engine->layout(false);
        if (!Request::isPost()) {
            $id = input('id/d');
            if (!$id) {
                return '关键参数错误';
            }
            $typeModel = new typeModel();

            $specname = $typeModel->getNameById($id);
            $this->assign('spec_name', $specname);
            $this->assign('spec_id', $id);

            $goodsParamsModel = new GoodsParams();
            $params           = $goodsParamsModel->getAllParams();
            $this->assign('params', $params);

            //获取已绑定参数
            $goodsTypeParamsModel = new GoodsTypeParams();
            $typeParams           = $goodsTypeParamsModel->getRelParams($id);
            $this->assign('typeParams', $typeParams);

            $typePids = [];
            if ($typeParams) {
                $typePids = array_column($typeParams, 'params_id');
            }
            $this->assign('typePids', $typePids);

            return $this->fetch('addParams');
        } else {
            $return_data = [
                'status' => false,
                'msg'    => '保存失败',
                'data'   => '',
            ];
            //存储添加内容
            $data = array(
                'type_id'   => input('post.type_id/d'),
                'params_id' => input('post.params_id/a'),
            );

            $goodsTypeParamsModel = new GoodsTypeParams();
            $result               = $goodsTypeParamsModel->updateTypeParams($data['type_id'], $data['params_id']);

            if ($result !== false) {
                $return_data = [
                    'status' => true,
                    'msg'    => '保存成功',
                    'data'   => $result,
                ];
            }
            return $return_data;
        }
    }


}