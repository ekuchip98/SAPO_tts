package com.sapo.edu.api;

import com.sapo.edu.api.output.ProductOutput;
import com.sapo.edu.dto.ProductDTO;
import com.sapo.edu.service.IProductService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class ProductAPI {

    private final IProductService productService;

    public ProductAPI(IProductService productService) {
        this.productService = productService;
    }

    //api hien thi tất cả sản phẩm phân trang và lọc theo tên
    @GetMapping(value = "/products")
    public ResponseEntity<ProductOutput> showProduct(@RequestParam(value = "page", required = false) Integer page,
                                                     @RequestParam(value = "limit", required = false) Integer limit,
                                                     @RequestParam(value = "name", defaultValue = "NONE") String name) {
        ProductOutput result = new ProductOutput();
        if (page != null && limit != null) {
            result.setPage(page);
            Pageable pageable = PageRequest.of(page - 1, limit);
            result.setListResult(productService.findAll(pageable));
            result.setTotalPage((int) Math.ceil((double) (productService.totalItem()) / limit));
        } else if (!name.equals("NONE")) {
            result.setListResult(productService.findByNameLike("%" + name + "%"));
        } else {
            result.setListResult(productService.findAll());
        }
        if (StringUtils.isEmpty(result)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //api lọc theo id san pham
    @GetMapping(value = "/products/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable("id") Integer id) {
        ProductDTO product = productService.findById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    //api tạo san pham
    @PostMapping(value = "/products")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO model) {
        ProductDTO product = productService.save(model);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    //api sua san pham
    @PutMapping(value = "/products/{id}")
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO model, @PathVariable("id") Integer id) {
        model.setId(id);
        ProductDTO product = productService.save(model);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping(value = "/products")
    public ResponseEntity<HttpStatus> deleteProduct(@RequestBody int[] ids) {
        productService.delete(ids);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
