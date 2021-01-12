package com.sapo.edu.api.output;

import com.sapo.edu.dto.ProductDTO;
import lombok.Data;

@Data
public class ProductOutput extends BaseOutput<ProductDTO> {

    private String name;
}
